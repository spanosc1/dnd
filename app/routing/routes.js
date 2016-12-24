var Character	= require("../model/character.js"); // Pulls out the Character Model
var path 			= require('path');




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases when a user visits a link 
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
	// ---------------------------------------------------------------------------

	app.get('/api/char', function(req, res){
		Character.findAll({}).then(function(result){
				res.json(result);
			})
	});

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	app.post('/api/save', function(req, res){

		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table 
			Character.findAll({
				where: {
					userName: "ChrisSpanos3"
				}
			}).then(function(result){
				if(!result[0])
				{
					Character.create({
						userName: "ChrisSpanos3",
		  				password: "password"
					});
				}
				else
				{
					console.log("This username is taken");
				}
			});
			//var character = req.body;
			res.json(true);
	});
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/game.html'));
	});
}