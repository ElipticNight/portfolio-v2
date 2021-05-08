const Database = require('../database');

class Projects
{
    static async get(id) {
        let db = Database.connect();
        return await db.getProject(id);
    }

    static async getImage(id, imageNo) {
        let db = Database.connect();
        let images = await db.getProjectImage(id);
        return images[imageNo];
    }
}

module.exports = Projects;