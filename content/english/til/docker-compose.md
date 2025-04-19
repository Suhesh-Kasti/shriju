---
title: "Starting and Stopping Docker Containers with docker-compose"
date: 2023-11-15T09:30:00+05:30
draft: false
tilDate: "2023-11-15"
categories: ["2023", "November"]
tags: ["docker", "devops", "containers"]
---

Today I learned how to efficiently manage Docker containers using docker-compose. This is a game-changer for managing multi-container applications.

## Basic Commands

The most common commands for docker-compose are surprisingly simple:

```bash
# Start containers defined in docker-compose.yml
docker-compose up

# Start containers in detached mode (background)
docker-compose up -d

# Stop running containers
docker-compose down

# Stop containers and remove volumes
docker-compose down -v

# View running containers
docker-compose ps
```

## The docker-compose.yml File

The docker-compose.yml file is where all the magic happens. Here's a basic example:

```yaml
version: '3'

services:
  web:
    image: nginx:latest
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
    depends_on:
      - db
  
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: example
      MYSQL_DATABASE: myapp
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:
```

## Benefits Over Manual Docker Commands

Using docker-compose offers several advantages:

1. **Simplicity**: Define your entire application stack in a single file
2. **Reproducibility**: Anyone can run the same setup with a single command
3. **Service Dependencies**: Specify which services depend on others
4. **Environment Variables**: Easily manage environment configurations
5. **Volume Management**: Persistent data storage is simplified

## Practical Use Case

I used this today to manage a development environment with a web server, database, and cache service. Instead of starting and configuring each container individually, I just ran `docker-compose up -d` and had my entire development stack running in seconds.

When I was done, `docker-compose down` cleaned everything up neatly.

This is definitely going to be part of my regular workflow from now on!
