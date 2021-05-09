const Database = require('../database');

class Projects
{
    static builder;

    static async get(id) {
        let db = Database.connect();
        let project = await db.getProject(id);
        project[0].images = await db.getProjectImages(id);
        project[0].technologies = await db.getProjectTechnologies(id);
        project[0].skills = await db.getProjectSkills(id);
        return project;
    }

    static async getAll() {
        Projects.builder = [];
        let db = Database.connect();
        Projects.builder = await db.getAllProjects();
        Projects.addToProject("images", await db.getAllImages());
        Projects.addToProject("tags", await db.getAllTags());
        Projects.addToProject("technologies", await db.getAllTechnologies());
        Projects.addToProject("skills", await db.getAllSkills());

        return Projects.builder;
    }

    static addToProject(type, arr) {
        arr.forEach((el) => {
            let project = Projects.builder.find(x => x.id === el.project_id);
            if (!project[type]) {
                project[type] = [];
            }
            project[type].push(el.val);
        });
    }
}

module.exports = Projects;