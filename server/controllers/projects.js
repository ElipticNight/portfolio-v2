const Database = require('../database');

class Projects
{
    static async get(id) {
        let db = Database.connect();
        return await db.getProject(id);
    }
    
    static async getAll() {
        let db = Database.connect();
        return await db.getProjects();
    }
}

module.exports = Projects;