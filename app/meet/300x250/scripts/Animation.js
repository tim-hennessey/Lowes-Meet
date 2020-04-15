var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl = new TimelineMax();

	var img = document.getElementById('img');
	var headline = document.getElementById('headline');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});
		t.set(headline, {transformOrigin:"70% 35%"});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl.from(img, 5, {scale:1.1, ease: Sine.easeOut})
		.from(headline, 5, {scale:.9, ease: Sine.easeOut},0);
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
