# Personal Finance API

## Description
A RESTful API for managing personal financial records, allowing users to record income and expenses, retrieve past transactions, and get summaries by category or time period.

## Technologies Used
- **Backend Framework:** Node.js with Express.js
- **Database:** SQLite
- **Middleware:** body-parser

## Features
- Add new transactions (income or expense).
- Retrieve all transactions.
- Get transaction details by ID.
- Update existing transactions.
- Delete transactions.
- Get a summary of total income, expenses, and balance.

## API Endpoints
| Method | Endpoint            | Description                          |
|--------|---------------------|--------------------------------------|
| POST   | `/transactions`     | Adds a new transaction               |
| GET    | `/transactions`     | Retrieves all transactions            |
| GET    | `/transactions/:id` | Retrieves a transaction by ID        |
| PUT    | `/transactions/:id` | Updates a transaction by ID          |
| DELETE | `/transactions/:id` | Deletes a transaction by ID          |
| GET    | `/summary`          | Retrieves a summary of transactions   |

## Getting Started

### Prerequisites
- Node.js and npm (Node Package Manager) installed on your machine.
- SQLite installed for database management (if necessary).

### Installation
1. Clone the repository:
    ```bash
    git clone <your-github-repo-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd personal-finance-api
    ```
3. Install the required packages:
    ```bash
    npm install
    ```

### Running the API
1. Start the server:
    ```bash
    node server.js
    ```
2. The server will be running at `http://localhost:3000`.

## Testing the API
You can use Postman or any API client to test the endpoints. Here’s how you can test some endpoints:

### Example Requests

1. **Add a Transaction**
   - **Method:** POST
   - **URL:** `http://localhost:3000/transactions`
   - **Body:**
     ```json
     {
         "type": "income",
         "category": "Salary",
         "amount": 5000,
         "date": "2024-10-01",
         "description": "Monthly Salary"
     }
     ```

2. **Get All Transactions**
   - **Method:** GET
   - **URL:** `http://localhost:3000/transactions`

3. **Get a Transaction by ID**
   - **Method:** GET
   - **URL:** `http://localhost:3000/transactions/1` (replace `1` with the actual ID)

4. **Update a Transaction**
   - **Method:** PUT
   - **URL:** `http://localhost:3000/transactions/1` (replace `1` with the actual ID)
   - **Body:**
     ```json
     {
         "type": "expense",
         "category": "Rent",
         "amount": 1500,
         "date": "2024-10-01",
         "description": "Monthly Rent"
     }
     ```

5. **Delete a Transaction**
   - **Method:** DELETE
   - **URL:** `http://localhost:3000/transactions/1` (replace `1` with the actual ID)

6. **Get Summary**
   - **Method:** GET
   - **URL:** `http://localhost:3000/summary`

## Conclusion
This Personal Finance API provides a simple and effective way to manage your financial records. You can expand its functionality by adding features like user authentication or advanced reporting.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
