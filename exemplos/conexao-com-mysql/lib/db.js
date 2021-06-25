import mysql from 'mysql2/promise';
    
 export async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

   // const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection(//"mysql://root:root@localhost:3306/projeto"
            {
                host:process.env.MYSQL_HOST,
                database:process.env.MYSQL_DATABASE,
                user:process.env.MYSQL_USER,
                password:process.env.MYSQL_PASSWORD
            });
   
    global.connection = connection;
    return connection;
}



 