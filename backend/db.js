const Pool = require("pg").Pool;

module.exports = new Pool({
    user: "t193270",
    password: "t193270",
    host: "dev.vk.edu.ee",
    port: 5432,
    database: "db_Tammoja"
});