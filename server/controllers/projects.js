const Database = require('../database');

class Projects
{
    static async test() {
        console.log(Database.connect());
        return "Database.connect()";
    }
}

module.exports = Projects;