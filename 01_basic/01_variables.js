const accountID = 14456
let accountEmail = "sahoodinesh400@gmail.com" 
var accountPwd = "12345"
accountCity = "Rourkela"
let accountState;

// accountID = 2 //Not Allowed

accountEmail = "dineshsahoo039@gmail.com"
accountPwd = "9928"
accountCity = "Bhubaneswar"

console.log(accountID);

/*
Preferred not to use var
Because of  issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPwd, accountCity, accountState])