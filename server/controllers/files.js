const Database = require('../database');

class Files
{
    static getProjectImage(filename) {
        let location = __dirname + `/images/projects/${filename}`;
        return location;
    }
}

module.exports = Files;