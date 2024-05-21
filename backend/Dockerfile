# –––––––––––––––--------------
# Build stage
FROM lukemathwalker/cargo-chef:latest-rust-1 AS chef
WORKDIR /app

# Prepare the build recipe
FROM chef AS planner
COPY . .
RUN cargo chef prepare --recipe-path recipe.json

# Build the dependencies
FROM chef AS builder 
COPY --from=planner /app/recipe.json recipe.json
# Build dependencies - this is the caching Docker layer!
RUN cargo chef cook --release --recipe-path recipe.json
# Install necessary packages for building
RUN apt-get update && apt-get install -y libssl-dev pkg-config
# Copy source code for building
COPY . .

# Final run stage
FROM rust:bookworm AS runtime
WORKDIR /app
# Install necessary runtime packages
RUN apt-get update && apt-get install -y libssl3
# Copy the entire application source code
COPY . .
# Install Rust toolchain (optional if not included in the base image)
RUN rustup default stable
# Ensure the entry point is set to cargo run
CMD ["cargo", "run", "--release", "--bin", "voyager-api"]
