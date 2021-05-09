const Database = require('../database');

class Projects
{
    static async get(id) {
        let db = Database.connect();
        let project = await db.getProject(id);
        project[0].technologies = await db.getProjectTechnologies(id);
        project[0].skills = await db.getProjectSkills(id);
        return project;
    }

    static async getImage(id, imageNo) {
        let db = Database.connect();
        let images = await db.getProjectImage(id);
        return images[imageNo];
    }

    static async getAll() {
        let db = Database.connect();
        return db.getAllProjects();
    }
}

module.exports = Projects;