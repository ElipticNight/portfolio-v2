const Projects = require('./controllers/projects');

const cors = require('cors');
var express = require('express'),
	router = express.Router();
	router.use(cors());
	router.use(express.json());

	router.get('/test', cors(), (req, res) => {
		(async() => {
			res.send(await Projects.test());
		})();
	})

module.exports = router;