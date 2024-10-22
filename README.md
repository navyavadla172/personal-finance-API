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



![Screenshot 2024-10-23 031550](https://github.com/user-attachments/assets/2a11188e-33bc-4f97-a1bf-de6ae267869c)

![Screenshot 2024-10-23 031513](https://github.com/user-attachments/assets/631cd23f-2959-4655-b2b6-1e41858b8c3e)

![Screenshot 2024-10-23 031437](https://github.com/user-attachments/assets/31099af4-694b-41ad-9578-a15ba399a12c)

![Screenshot 2024-10-23 031412](https://github.com/user-attachments/assets/5b64e4db-7df7-412f-a99c-15ae0de2de3f)

![Screenshot 2024-10-23 031348](https://github.com/user-attachments/assets/403f82e5-3214-4a3a-8ed0-4029ca847e9d)

![Screenshot 2024-10-23 031329](https://github.com/user-attachments/assets/d4c3806c-71bf-4323-a35a-f5f6a076c95c)

![Screenshot 2024-10-23 031257](https://github.com/user-attachments/assets/072a045d-4853-4766-991d-701e2c484a3d)

![Screenshot 2024-10-23 031222](https://github.com/user-attachments/assets/9ffc390d-8381-40bb-be0f-b3ae77a6569b)
