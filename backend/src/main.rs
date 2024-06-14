#![allow(unused)]
use std::{fmt::format, net::SocketAddr};
pub mod utils;

use axum::{
    middleware,
    response::{Html, IntoResponse, Response},
    routing::{get, get_service},
    Router,
};

use serde::{Deserialize, Serialize};
mod server;

#[tokio::main]
async fn main() {
    let routes_all: Router = Router::new().merge(server::routes_handler::routes());
    let addr: SocketAddr = SocketAddr::from(([0, 0, 0, 0], 8080));
    println!("->> SERVER RUNNING ON {addr}\n");
    axum::Server::bind(&addr)
        .serve(routes_all.into_make_service())
        .await
        .unwrap()
}
