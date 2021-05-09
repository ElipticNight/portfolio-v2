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
 
	// router.get('/project/:id/images/:imageNo', cors(corsOptions), (req, res) => {
	// 	(async() => {
	// 		let image = await Projects.getImage(req.params.id, req.params.imageNo);
	// 		res.sendFile(__dirname + `/images/${image.filename}`);
	// 	})();
	// })

	router.get('/image/:name', cors(corsOptions), (req, res) => {
		(async() => {
			let image = Projects.getImage(req.params.name);
			res.sendFile(image);
		})();
	})

module.exports = router;