use axum::http::{Request, Response, StatusCode};
use axum::response::IntoResponse;
use axum::{routing::post, Json, Router};
use reqwest::{
    header::{HeaderMap, HeaderValue},
    Client,
};
use serde::{Deserialize, Serialize};
use std::{convert::Infallible, collections::HashMap};

// util function to concat base URL and contract address payload
fn concat_url(base_url: &str, to: &str) -> String {
    format!("{}?to={}", base_url, to)
}

#[derive(Deserialize)]
struct Params {
    contract_address: String,
    x_api_key: String,
}

#[derive(Debug, Deserialize)]
struct VoyagerAPIResponse {
    items: Vec<Item>,
}

#[derive(Debug, Deserialize)]
struct Item {
    actualFee: String,
    hash: String,
}

// Serialize the HashMap so that it can be returned as JSON
#[derive(Serialize)]
struct HashToFeeResponse {
    hash_to_fee: HashMap<String, String>,
}

async fn get_actual_fee(payload: Json<Params>) -> Result<impl IntoResponse, Infallible> {
    let client: Client = Client::new();
    let base_url = "https://api.voyager.online/beta/txns";

    // access the inner Params struct from Json wrapper
    let params_payload: Params = payload.0;

    // validate contract address length
    if params_payload.contract_address.len() != 66 {
        let response = Response::builder()
            .status(StatusCode::BAD_REQUEST)
            .body("Contract address must be 66 characters long".to_string())
            .unwrap();
        return Ok(response);
    }


    let voyager_url = concat_url(&base_url, &params_payload.contract_address);

    // create a header map and add custom request headers
    let mut request_headers = HeaderMap::new();
    request_headers.insert(
        "x-api-key",
        HeaderValue::from_str(&params_payload.x_api_key).unwrap(),
    );

    let response = client
        .get(voyager_url)
        .headers(request_headers) // set request headers
        .send()
        .await
        .unwrap();

    // handle response
    let status = response.status();
    let body = response.text().await.unwrap();

    // deserialize the response
    let response: VoyagerAPIResponse = serde_json::from_str(&body).unwrap();

    // check if the voyager response contains any items
    if response.items.is_empty() {
        let response = axum::http::Response::builder()
            .status(StatusCode::NOT_FOUND)
            .body("unsuccessful response from Voyager API".to_string())
            .unwrap();
        return Ok(response);
    }

    // map hash with actual fee
    let mut hash_to_fee: HashMap<String, String> = HashMap::new();
    // populate the HashMap with the mapping from hash to actualFee
    for item in &response.items {
        let hash = &item.hash;
        let actual_fee = &item.actualFee;
        hash_to_fee.insert(hash.clone(), actual_fee.clone());
    }

   // serialize the HashMap as JSON
   let hash_to_fee_response = HashToFeeResponse { hash_to_fee };
   let json_response = serde_json::to_string(&hash_to_fee_response).unwrap();

   Ok(Response::builder()
       .status(status)
       .body(json_response)
       .unwrap())
}

pub fn routes() -> Router {
    Router::new().route("/api/get-actual-fee", post(get_actual_fee))
}
