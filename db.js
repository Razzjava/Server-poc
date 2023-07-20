const db = new sqlite3.Database('./db/poc.sqlite3');

/*const newTable = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    sessionid TEXT,
    created DATETIME DEFAULT CURRENT_TIMESTAMP
    )`;
*/

export function createUser(username, password, sessionid) {
    const insert = `INSERT INTO users (username, password, sessionid)
    VALUES (?, ?, ?)`;
    return new Promise((resolve, reject) => {
        db.run(insert, [username, password, sessionid], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve(this.lastID);
            }
        });
    });
}

export function getUser(username, password) {
    const query = `Select Username, Password from users where username = ? AND password = ?`;

    return new Promise((resolve, reject) => {
        db.get(query, [username, password], (err)=> {
            if(err){
                reject(err);
            } else {
                resolve(this.lastID); 
            }
        })
    })
}

export function deleteUser(username, password, sessionid){
    const query = `DELETE FROM users WHERE username = ? AND password = ? AND sessionid = ?`;

    return new Promise((resolve, reject) => {
        db.run(query, [username, password, sessionid], (err) => {
            if(err){
                reject(err);
            } else {
                resolve(this.lastID);
            }
        })
    })
}