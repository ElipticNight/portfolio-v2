const path = require('path');

class Files
{
    static getProjectImage(filename) {
        let location = path.join(__dirname + `/../images/projects/${filename}`);
        return location;
    }
}

module.exports = Files;