use tower_http::cors::{Any, CorsLayer}; // import CORS layer

// url concat util fn
pub fn concat_url(base_url: &str, to: &str) -> String {
    format!("{}?to={}", base_url, to)
}

// CORS util fn
pub fn cors_handler() -> CorsLayer {
    CorsLayer::new()
        .allow_origin(Any)
        .allow_methods(Any)
        .allow_headers(Any)
}
