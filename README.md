# ProductsWebApi

## Getting Started

This project is developed using Angular.js Core, Angular.js Route, and Entity Framework. Essentially, it allows performing CRUD operations for products.

### Prerequisites

The following software and tools are required to run the project locally.

- Visual Studio 2019 or newer
- SQL Server (or another database system)

### Installation

Follow the steps below to run the project on your local environment.

1. Clone the repository:

    ```bash
    git clone (https://github.com/mertncu/ProductsWebApi.git)
    cd project
    ```

2. Open the `ProductsWebApi.sln` file in Visual Studio.
3. Use Package Manager Console to create the database:

    ```bash
    Update-Database
    ```

4. Install Angular.JS Core and Route:

    ```bash
   Install-Package angularjs -Version 1.8.2
    ```

        ```bash
   Install-Package angularjs.Route -Version 1.8.2
    ```

  

5. Start the project using F5 or Debug > Start Debugging in Visual Studio.

### Usage

Once the project is running, you can use the application by navigating to `http://localhost:5000` in your browser. You can view, add, update, and delete products.
