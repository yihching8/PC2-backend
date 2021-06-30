const mysql = require("mysql");
const properties = {
    host:"34.126.172.116",
    user:"root",
    password:"fintechsglab",
    port: 3306,
    database: "market",
}

let connection = mysql.createConnection(properties);

connection.connect((error) => {
    if (error){
        console.error("Connection to MySQL failed! \n" + error);
    } else {
        console.log("Connected to MySQL!");
    }
});
//use console.error or console.log is the same for error


module.exports = {
    connection, 
}

//
// connection.query(connection.query(
//     'select * from transactions',  //mysql query in string format
//     (error, result) => {
//         if(error){
//             console.log(error);
//         } else{
//             console.log(result);
//         }
//     }
// );
//     'select * from transactions',  //mysql query in string format
//     (error, result) => {
//         if(error){
//             console.log(error);
//         } else{
//             console.log(result);
//         }
//     }
// );

module.exports = {
    connection, 
}