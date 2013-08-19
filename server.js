var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/events', function(req, res) {
	// Simulating some loading time...
	setTimeout(function() {
		res.type('application/json');
		res.send(200, [
			{
				id: "1234",
				eventName: "GMIC - Silicon Valley's Largest Mobile Conference",
				message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec turpis mollis lectus bibendum scelerisque non nec felis.",
				submitted: "2013-05-26T18:35Z",
				eventLocation: "747 Howard St , San Francisco",
				eventDate: "October 21, 2013 at 8:00 AM"
			},
			{
				id: "1235",
				eventName: "Sacramento Music Festival - 2013",
				message: "Organized by Sacramento Traditional Jazz Society",
				submitted: "2013-05-26T18:35Z",
				eventLocation: "Old Town Sacramento, K & Front Street, Sacramento, CA",
				eventDate: ""
			},
			{
				id: "1236",
				eventName: "Sunset Celebration Weekend 2013 - June 1 & 2, 10am-5pm",
				message: "Organized by Sunset Magazine",
				submitted: "2013-05-26T18:35Z",
				eventLocation: "Sunset Magazine Headquarters and Gardens, 80 Willow Rd, Menlo Park, CA",
				eventDate: "June 1, 2013 at 10:00 AM"
			}
		]);
	}, 1000);
});

app.listen(3000, function() {
	console.log("Server listening onport 3000");
});