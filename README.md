# Pharmacy Project

This project is a pharmacy management system that includes user authentication and information retrieval.

## Table of Contents
- [Overview](#overview)
- [API Documentation](#api-documentation)
  - [User Login](#user-login)
  - [User Registration](#user-registration)
  - [User Information](#user-information)

## Overview
This project provides a backend system for managing a pharmacy, including user authentication and user information retrieval.

## API Documentation

### User Login
**Endpoint:** `/user/login`

**Method:** `POST`

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
- `200 OK` on successful login
- `400 Bad Request` on invalid credentials
- `500 Internal Server Error` on server error

**Example:**
```bash
curl -X POST http://localhost:5000/user/login -d '{"email":"user1@example.com", "password":"password123"}' -H "Content-Type: application/json"
```

### User Registration
**Endpoint:** `/user/register`

**Method:** `POST`

**Request Body:**
```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string",
  "phone": "string"
}
```

**Response:**
- `201 Created` on successful registration
- `500 Internal Server Error` on server error

**Example:**
```bash
curl -X POST http://localhost:5000/user/register -d '{"fullname":{"firstname":"John", "lastname":"Doe"}, "email":"john.doe@example.com", "password":"password123", "phone":"1234567890"}' -H "Content-Type: application/json"
```

### User Information
**Endpoint:** `/user/userinfo`

**Method:** `GET`

**Headers:**
- `Authorization: Bearer <token>`

**Response:**
- `200 OK` with user information
- `401 Unauthorized` if token is invalid or missing
- `404 Not Found` if user not found
- `500 Internal Server Error` on server error

**Example:**
```bash
curl -X GET http://localhost:5000/user/userinfo -H "Authorization: Bearer <token>"
```
