# Ecommerce-backend

## Description

This is an e-commerce back end application built using Express.js and Sequelize ORM. It uses MySQL database to store and manage the data of the application. The application provides a RESTful API for managing products, categories, and tags.

## Walkthrough Video

Walkthrough video demonstrating the functionality of the application.

![Demo of Ecommerce app](./assets/ecomdemo1.gif)
![Demo of Ecommerce app](./assets/ecomdemo2.gif)
![Demo of Ecommerce app](./assets/ecomdemo3.gif)

## Installation and Usage
1. Clone the repository to your local machine.

2. Navigate to the project directory and install the dependencies using the following command:

- npm install
3. Create a .env file in the root directory of the project and add the following environment variables:

- DB_NAME=<your_database_name>
- DB_USER=<your_database_user>
- DB_PASSWORD=<your_database_password>

4. Seed the development database by running the following command:

- node seeds/index.js

5. Start the application by running the following command:

- npm start
6. Test the API routes using a tool like Insomnia Core.

## API Routes

### Products

GET /api/products: Get all products.

GET /api/products/:id: Get a single product by its id.

POST /api/products: Create a new product.

PUT /api/products/:id: Update a product by its id.

DELETE /api/products/:id: Delete a product by its id.

### Categories

GET /api/categories: Get all categories.

GET /api/categories/:id: Get a single category by its id.

POST /api/categories: Create a new category.

PUT /api/categories/:id: Update a category by its id.

DELETE /api/categories/:id: Delete a category by its id.

### Tags

GET /api/tags: Get all tags.

GET /api/tags/:id: Get a single tag by its id.

POST /api/tags: Create a new tag.

PUT /api/tags/:id: Update a tag by its id.

DELETE /api/tags/:id: Delete a tag by its id.
