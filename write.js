const fs = require("fs")

const write = function (data="None"){
    fs.writeFileSync('Task.txt', data);
}
module.exports = write;