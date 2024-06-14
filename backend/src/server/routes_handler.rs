use crate::utils;
use axum::http::{Request, Response, StatusCode};
use axum::response::IntoResponse;
use axum::{routing::post, Json, Router};
use reqwest::{
    header::{HeaderMap, HeaderValue},
    Client,
};
use serde::{Deserialize, Serialize};
use std::{collections::HashMap, convert::Infallible};

#[derive(Deserialize)]
struct Params {
    contract_address: String,
    x_api_key: String,
}

#[derive(Debug, Deserialize, Serialize)] // Derive Serialize trait
struct VoyagerAPIResponse {
    items: Vec<Item>,
}

#[derive(Debug, Deserialize, Serialize)] // Derive Serialize trait
struct Item {
    hash: String,
    actualFee: String,
    timestamp: u64,
}

// serialize the HashMap so that it can be returned as JSON
#[derive(Debug, Serialize)]
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

    let voyager_url = utils::concat_url(&base_url, &params_payload.contract_address);

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

    println!("direct API___response___: {:?}", body);

    // parse the JSON response
    let api_response: Result<VoyagerAPIResponse, _> = serde_json::from_str(&body);

    // check if parsing is successful
    match api_response {
        Ok(api_response) => {
            // find the item with the minimum timestamp
            let oldest_item = api_response.items.iter().min_by_key(|item| item.timestamp);

            match oldest_item {
                Some(oldest_item) => {
                    // json stringify convert the oldest item and return it
                    Ok(Response::builder()
                        .status(status)
                        .body(serde_json::to_string(&oldest_item).unwrap())
                        .unwrap())
                }
                None => {
                    // handle no items in voyager API response
                    let response = Response::builder()
                        .status(StatusCode::INTERNAL_SERVER_ERROR)
                        .body("No items found".to_string())
                        .unwrap();
                    Ok(response)
                }
            }
        }
        Err(err) => {
            let response = Response::builder()
                .status(StatusCode::INTERNAL_SERVER_ERROR)
                .body(format!("Failed to parse voyager API response: {}", err))
                .unwrap();
            Ok(response)
        }
    }
}

pub fn routes() -> Router {
    // add CORS layer to allow any origin
    let cors = utils::cors_handler();

    // integrate CORS to router
    Router::new()
        .route("/api/get-actual-fee", post(get_actual_fee))
        .layer(cors)
}
