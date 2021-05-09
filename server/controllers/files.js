const path = require('path');

class Files
{
    static getImage(filename) {
        let location = path.join(__dirname + `/../images/${filename}`);
        return location;
    }
}

module.exports = Files;