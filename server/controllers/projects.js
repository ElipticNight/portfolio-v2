const Database = require('../database');

class Projects
{
    static async getAll() {
        let db = Database.connect();
        return await db.getProjects();
    }
}

module.exports = Projects;