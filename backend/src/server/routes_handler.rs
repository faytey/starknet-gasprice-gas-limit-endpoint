use axum::http::{Request, Response, StatusCode};
use axum::response::IntoResponse;
use axum::{Json, Router, routing::post};
use serde::Deserialize;
use reqwest::{Client, header::{HeaderMap, HeaderValue}};
// use tower::ServiceExt;
use std::convert::Infallible;
use std::sync::Arc;

fn concat_url(base_url: &str, end_point: &str) -> String {
    format!("{}?end_point={}", base_url, end_point)
}

#[derive(Deserialize)]
struct Params {
    class_hash: String,
    x_api_key: String,
}

async fn call_voyager(payload: Json<Params>) -> Result<impl IntoResponse, Infallible> {
    let client: Client = Client::new();
    let base_url = "https://api.voyager.online/beta/classes/";

    // cccess the inner Params struct from Json wrapper
    let params_payload: Params = payload.0;

    println!("class_hash_len___ {}", &params_payload.class_hash.len());

    if params_payload.class_hash.len() != 66 {
        // validate class_hash length
        // return error message if class_hash length is !== 66
        let response = Response::builder()
        .status(StatusCode::BAD_REQUEST)
        .body("class hash length must be 66 char long".to_string())
        .unwrap();
        return Ok(response);
    }

    let voyager_url = concat_url(&base_url, &params_payload.class_hash);

    // Create a header map and add custom request headers
    let mut request_headers = HeaderMap::new();
    request_headers.insert("x-api-key", HeaderValue::from_str(&params_payload.x_api_key).unwrap());

    let response = client
        .get(voyager_url)
        .headers(request_headers) // Set request headers
        .send()
        .await
        .unwrap();

    // Handle response
    let status = response.status();
    let body = response.text().await.unwrap();

    Ok(Response::builder()
        .status(status)
        .body(body)
        .unwrap())
}

pub fn routes() -> Router {
    Router::new().route("/api/voyager", post(call_voyager))
}
