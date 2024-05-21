# Build stage
FROM rust:bookworm AS builder

WORKDIR /app

# Copy the source code into the container
COPY . .

# Build the application
RUN cargo build --release

# Final run stage
FROM debian:bookworm-slim AS runner

# Install the necessary runtime libraries
RUN apt-get update && apt-get install -y libssl3

WORKDIR /app

# Copy the compiled binary from the builder stage
COPY --from=builder /app/target/release/voyager-api /app/voyager-api

# Ensure the binary is executable
RUN chmod +x /app/voyager-api

# Command to run your server
CMD ["/app/voyager-api"]
