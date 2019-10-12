//Required packages 
var mysql = require ("mysql");
var inquirer = ("iniquirer");
var Table = require("cli-table2");

//Connecting to mySQL database
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "32013989MC",
    database: "bamazon_db",
    port: 3306,

});
 connection.connect();

 //Calls mySQL table info
 var display = function() {
    connection.query("SELECT * FROM products", function(err, res){
      if (err) throw err;
      console.log("------------")
      console.log("Bamazon by Carlo V")
      console.log("------------")
      console.log("")
      console.log("Find something here: ")
      console.log("")
    });
    //Data will be displayed inside a table
    var table = new Table({
      head: ["Product ID", "Product Description", "Price"],
      colWidths: [12, 50, 8],
      colAligns: ["center", "left", "right"],
      style: {
        head: ["green"],
        compact: true
      }
    });
    for (var i = 0; i < res.lenght; i++){
      table.push([res[i].id, res[i].product_name, res[i].price]);
    }
    console.log(table.toString());
    console.log("");

 };


 display();