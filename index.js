var request = require('request');
request('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys',
	function (error, response, body) {
  		if(!error && response.statusCode == 200); {
  			//parshing the huge string into objects
  			var parsedData = JSON.parse(body);
  			console.log("******* Date and temperatiure of SanDiago, LA *******");

  			console.log("Date: ",parsedData.query.results.channel.item.condition.date);
  			console.log("temperature: ", parsedData.query.results.channel.item.condition.temp);
  			console.log("Day: ",parsedData.query.results.channel.item.condition.text);

  		}
});