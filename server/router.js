const Projects = require('./controllers/projects');
const Files = require('./controllers/files');

const cors = require('cors');
const corsOptions = {
	origin: ["http://localhost:8080", "https://aidanbyrne.tech"],
}

var express = require('express'),
	router = express.Router();
	router.use(express.json());

	router.get('/project/:id', cors(corsOptions), (req, res) => {
		(async() => {
			res.send(await Projects.get(req.params.id));
		})();
	})

	router.get('/projects', cors(corsOptions), (req, res) => {
		(async() => {
			res.send(await Projects.getAll());
		})();
	})

	router.get('/image/:name', cors(corsOptions), (req, res) => {
		(async() => {
			let image = Files.getImage(req.params.name);
			res.sendFile(image);
		})();
	})

module.exports = router;