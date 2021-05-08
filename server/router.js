const Projects = require('./controllers/projects');

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

	router.get('/project/:id/images/:imageNo', cors(corsOptions), (req, res) => {
		(async() => {
			let image = await Projects.getImage(req.params.id, req.params.imageNo);
			res.sendFile(__dirname + `/images/${image.filename}`);
		})();
	})

module.exports = router;