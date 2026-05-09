const express = require("express");
const sql = require("mssql");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json());

// MSSQL CONFIG
const config = {
  user: "SA",
  password: "2sYstemmaster!",
  server: "localhost",
  port: 1433,
  database: "STPETERS",
  options: {
    trustServerCertificate: true,
      encrypt: false
  },
};

// CONNECT TO MSSQL
sql.connect(config)
  .then(() => console.log("Connected to MSSQL"))
  .catch(err => console.error("DB Connection Error:", err));

// GENERIC CRUD API
app.all("/api/:mode/:table", async (req, res) => {
  const { mode, table } = req.params;
  const data = req.body;
  const condition = req.query.condition || "";

  try {
    let query = "";

    switch (mode.toLowerCase()) {

      // CREATE
      case "create":
        const createColumns = Object.keys(data).join(", ");
        const createValues = Object.values(data)
          .map(v => `'${v}'`)
          .join(", ");

        query = `
          INSERT INTO ${table} (${createColumns})
          VALUES (${createValues})
        `;
        break;

      // READ
      case "read":
        query = `
          SELECT * FROM ${table}
          ${condition ? `WHERE ${condition}` : ""}
        `;
        break;

      // UPDATE
      case "update":
        const updates = Object.entries(data)
          .map(([key, value]) => `${key}='${value}'`)
          .join(", ");

        query = `
          UPDATE ${table}
          SET ${updates}
          WHERE ${condition}
        `;
        break;

      // DELETE
      case "delete":
        query = `
          DELETE FROM ${table}
          WHERE ${condition}
        `;
        break;

      default:
        return res.status(400).json({
          error: "Invalid mode",
        });
    }

    const result = await sql.query(query);

    res.json({
      success: true,
      mode,
      query,
      data: result.recordset || result.rowsAffected,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

// START SERVER
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

/*
========================================
INSTALL
========================================

npm init -y
npm install express mssql

========================================
RUN
========================================

node app.js

========================================
API EXAMPLES
========================================

CREATE
POST http://localhost:3000/api/create/Users

Body:
{
  "name": "Alex",
  "email": "alex@test.com"
}

----------------------------------------

READ
GET http://localhost:3000/api/read/Users

GET with condition:
http://localhost:3000/api/read/Users?condition=id=1

----------------------------------------

UPDATE
PUT http://localhost:3000/api/update/Users?condition=id=1

Body:
{
  "email": "new@test.com"
}

----------------------------------------

DELETE
DELETE http://localhost:3000/api/delete/Users?condition=id=1

========================================
SAMPLE SQL TABLE
========================================

CREATE TABLE Users (
  id INT PRIMARY KEY IDENTITY(1,1),
  name VARCHAR(100),
  email VARCHAR(100)
);

*/



