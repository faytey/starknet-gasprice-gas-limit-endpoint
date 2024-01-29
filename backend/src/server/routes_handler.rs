use axum::http::{Request, Response, StatusCode};
use axum::response::IntoResponse;
use axum::{routing::post, Json, Router};
use reqwest::{
    header::{HeaderMap, HeaderValue},
    Client,
};
use serde::Deserialize;
// use tower::ServiceExt;
use std::convert::Infallible;
use std::sync::Arc;

// util function to concat base URL and contract address payload
fn concat_url(base_url: &str, to: &str) -> String {
    format!("{}?to={}", base_url, to)
}

#[derive(Deserialize)]
struct Params {
    contract_address: String,
    x_api_key: String,
}




async fn get_actual_fee(payload: Json<Params>) -> Result<impl IntoResponse, Infallible> {
    let client: Client = Client::new();
    let base_url = "https://api.voyager.online/beta/txns";

    // cccess the inner Params struct from Json wrapper
    let params_payload: Params = payload.0;
    if params_payload.contract_address.len() != 66 {
        // validate contract address length
        // return error message if contract_addr length is !== 66
        let response = Response::builder()
            .status(StatusCode::BAD_REQUEST)
            .body("Contract address must be 66 characters long".to_string())
            .unwrap();
        return Ok(response);
    }

    let voyager_url = concat_url(&base_url, &params_payload.contract_address);

    // Create a header map and add custom request headers
    let mut request_headers = HeaderMap::new();
    request_headers.insert(
        "x-api-key",
        HeaderValue::from_str(&params_payload.x_api_key).unwrap(),
    );

    let response = client
        .get(voyager_url)
        .headers(request_headers) // Set request headers
        .send()
        .await
        .unwrap();

    // Handle response
    let status = response.status();
    let body = response.text().await.unwrap();

    Ok(Response::builder().status(status).body(body).unwrap())
}

pub fn routes() -> Router {
    Router::new().route("/api/get-actual-fee", post(get_actual_fee))
}
