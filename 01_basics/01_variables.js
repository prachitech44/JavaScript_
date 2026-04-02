const accountId = 144553
let accountEmail = "Prachi12@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail ="hc@.com"
accountPassword = "21221"
accountCity = "Bengaluru"

console.log(accountId); 

/*
prefer not to use var
because of issue in block scope in funtional scope
*/

console.table([accountId, accountEmail, accountPassword , accountCity, accountState])