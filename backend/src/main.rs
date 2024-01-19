#![allow(unused)]
use std::{ fmt::format, net::SocketAddr};

use axum:: {
    response::{ 
        Html, 
        IntoResponse, 
        Response
    }, 
    routing::{
        get, 
        get_service
    }, 
    Router, 
    middleware
};

use serde::{ Deserialize, Serialize };
mod server;

#[tokio::main]
async fn main() {
    let routes_all: Router = Router::new()
                    .merge(server::routes_handler::routes());
    let addr: SocketAddr = SocketAddr::from(([127, 0, 0, 1], 5000));
    println!("->> SERVER RUNNING ON {addr}\n");
    axum::Server::bind(&addr)
    .serve(routes_all.into_make_service())
    .await
    .unwrap()
}

