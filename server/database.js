class Database
{
	static instance = null;
	con = null;
	query = null;

	static connect() {
		if (Database.instance === null) {
			Database.instance = new Database();
			return Database.instance;
		} else {
			return Database.instance;
		}
	}

	
	constructor() {
		const mysql = require('mysql');
		const util = require('util');
		this.con = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database: "portfolio"
		});
		this.con.connect(err => {
			if (err) throw err;
		});
		this.query = util.promisify(this.con.query).bind(this.con);
	}

	async getProject(id) {
		return await this.query(`
		select
			projects.id,
			projects.title,
			projects.summary,
			projects.description,
			projects.liveLink,
			projects.sourceLink,
			count(projects.id) as imageNo
		from
			projects
		join
			images
		on
			images.project_id = projects.id
		WHERE
			projects.id = ?
		group by
			projects.id
		`,
			[id]
		);
	}

	async getProjectImage(id) {
		return this.query("SELECT id, filename, alt FROM images WHERE project_id = ?", [id]);
	}
}

module.exports = Database;