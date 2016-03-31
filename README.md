# benchmark

// Usage example:

var a = function () {
	var k = String(Math.random());
};
var b = function () {
	var k = ""+Math.random();
};

BENCHMARK.count = 50000;

benchmark(a, b);

BENCHMARK.count *= 10;

benchmark(a, b);
