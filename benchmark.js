function sec2ms(sec) { return sec*1000; }

var BENCHMARK = {
	"count": 10000,
	"timelimit": 5
};

//	parameters = {
//		"test": function(){},
//		"count": Number(),
//		"timelimit": Number()
//	}
function time_measure (parameters) {

	if (typeof (parameters["test"]) != "function")
		return "Invalid callback";

	var count = parameters["count"];
	if (typeof (count) == "undefined")
		count = BENCHMARK.count;

	var timelimit = sec2ms(parameters["timelimit"]);
	if (typeof (timelimit) == "undefined")
		timelimit = sec2ms(BENCHMARK.timelimit);

	var identifier = "Duration";
	var now = Date.now();
	console.log("Running:", parameters["test"]);
	console.time(identifier);
	var runCount = count;
	while (runCount--)
	{
		parameters["test"]();
		if (timelimit < (Date.now()-now))
		{
			console.log("Time out, times run:", count-runCount );
			break;
		}
	}
	console.timeEnd(identifier);
}

function benchmark () {
	iterator (
		arguments,
		function (test) {
			time_measure({
				"test": test
			});
		}
	);
}

// object - Any type of object
// handler - Function
function iterator (object, handler) {

	if (typeof (handler) != "function")
		return "Handler must be callback type function.";

	switch (object.constructor.name)
	{
		case "Array":
			for (var itemIndex = 0, numberOfItems = object.length; itemIndex < numberOfItems; ++i)
			{
				handler(object[itemIndex]);
			}
		break;

		case "Object":
			for (var key in object)
			{
				handler(object[key]);
			}
		break;
	}
}
