const bcrypt = require("bcrypt");

const password = "Issuesfeedback@admin05";
const saltRounds = 10;

const hash = bcrypt.hashSync(password, saltRounds);
console.log(hash);
