const Projects = require('./controllers/projects');

const cors = require('cors');
var express = require('express'),
	router = express.Router();
	router.use(cors());
	router.use(express.json());

	router.get('/project/:id', cors(), (req, res) => {
		(async() => {
			res.send(await Projects.get(req.params.id));
		})();
	})

	router.get('/project/:id/images/:imageNo', cors(), (req, res) => {
		(async() => {
			let image = await Projects.getImage(req.params.id, req.params.imageNo);
			res.sendFile(__dirname + `/images/${image.filename}`);
		})();
	})

module.exports = router;