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
			SELECT
				projects.id,
				projects.title,
				projects.summary,
				projects.description,
				projects.liveLink,
				projects.sourceLink,
			CONCAT(
				'[',
				GROUP_CONCAT(
				'{',
				CONCAT (
					'id:',
					'"',
					images.id,
					'"',
					', ' 'filename:',
					'"',
					images.filename,
					'"',
					', ' 'alt:',
					images.alt
				),
				'}' SEPARATOR ','
				),
				']'
			) AS images
			FROM
				projects
			JOIN
				images
			ON
				images.project_id = projects.id
			WHERE
				projects.id = ?
			group BY
				projects.id
			`,
			[id]
		);
	}
}

module.exports = Database;