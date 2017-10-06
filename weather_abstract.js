var queryResult;





// var hat = 0;
// var top_now = 0;
// var leg = 0;
// var shoe = 0;
// var hat_right = createButton('Next');
// var top_right = createButton('Next');
// var leg_right = createButton('Next');
// var shoe_right = createButton('Next');
// var hat_left = createButton('Back');
// var top_left = createButton('Back');
// var leg_left = createButton('Back');
// var shoe_left = createButton('Back');
// var tshirt = loadImage("https://maxcdn.icons8.com/Share/icon/Clothing//t_shirt1600.png");
// var no_hat = loadImage("https://image.freepik.com/free-icon/male-short-hair-shape_318-46693.jpg");
// var hat = loadImage("https://d30y9cdsu7xlg0.cloudfront.net/png/222605-200.png");
// var wool_hat = loadImage("https://maxcdn.icons8.com/Share/icon/Clothing//beanie1600.png");
// var long = loadImage("https://cdn4.iconfinder.com/data/icons/clothicons/512/021-SweatShirt-512.png");
// var sweater = loadImage("https://d30y9cdsu7xlg0.cloudfront.net/png/24287-200.png");
// var sweat = loadImage("https://cdn3.iconfinder.com/data/icons/40-apparel-icons/48/svg-09-hoodie-512.png");
// var jacket = loadImage("http://icons.iconarchive.com/icons/iconsmind/outline/512/Jacket-icon.png");
// var heavy_j = loadImage("https://cdn1.iconfinder.com/data/icons/cloth-icons-vol-2/48/076-512.png");
// var heavy_coat = loadImage("https://www.shareicon.net/download/2016/01/25/708843_winter_512x512.png");
// var rain_gear = loadImage("https://cdn1.iconfinder.com/data/icons/cloth-icons-vol-1/48/039-512.png");
// var shorts = loadImage("https://cdn4.iconfinder.com/data/icons/fashion-and-clothing/128/Clothes_cargo_shorts-512.png");
// var pants = loadImage("http://icons.iconarchive.com/icons/iconsmind/outline/512/Pants-icon.png");
// var shoes = loadImage("https://d30y9cdsu7xlg0.cloudfront.net/png/783354-200.png");
// var flip = loadImage("https://d30y9cdsu7xlg0.cloudfront.net/png/116193-200.png");
// var boots = loadImage("http://icons.iconarchive.com/icons/iconsmind/outline/512/Boot-icon.png");

// var hats_img = [no_hat,hat, wool_hat];
// var tops_img = [tshirt, long, sweater, sweat, jacket, heavy_j, heavy_j, rain_gear];
// var legs_img = [shorts,pants];
// var shoes_img = [shoes, flip,boots];

var hats = ["No Hat","Hat", "Wool Hat"];
var tops = ["T-Shirt", "Long Sleeve T-Shirt", "Sweater", "Sweatshirt", "Jacket","Heavy Jacket","Heavy Coat", "Rain Gear"];
var legs = ["Shorts","Pants"];
var shoes = ["Shoes", "Flip Flops","Boots"];



function setup() {
  createCanvas(320, 568);
  background(140);
  query();
}

function query() {

  // URL for querying
  var url= 'https://api.darksky.net/forecast/10f387986cf9ddb5d2600e812e7e15d4/42.361936, -71.097309';

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
  loadJSON(url, query_past, 'jsonp');
}

function query_past(data) {
 // console.log(data);
  queryResult = data;

  // only look at current results:
  var time_now = new Date(queryResult.currently.time*1000);
  time_now.setDate(time_now.getDate()-1);

  var url = 'https://api.darksky.net/forecast/10f387986cf9ddb5d2600e812e7e15d4/42.361936, -71.097309, ' + time_now.getTime()/1000;

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, got_past_data, 'jsonp');
}

function gotData(data) {

  // console.log(data);
  queryResult = data;

  // only look at current results:
  var current = queryResult.currently;
  var minute = queryResult.minutely;
  var day = queryResult.daily.data[0];
  var tomorrow = queryResult.daily.data[1];

  var clothes = comfortable(day.apparentTemperatureMax,day.humidity,day.precipProbability,day.cloudCover);
  thing(clothes[0],clothes[1],clothes[2],clothes[3], day, current);

}

function got_past_data(data) {
	translate(width/2,0);
	queryResult = data;
	var day = queryResult.daily.data[0];
	textSize(14);
	textAlign(RIGHT);
	var clothes = comfortable(day.apparentTemperatureMax,day.humidity,day.precipProbability,day.cloudCover);
	fill(200);
	text("Yesterday you should have been comfortable in:" + "\n"+ clothes[0] + ", " + clothes[1] + ", " + clothes[2] + ", and " + clothes[3] + ".", 155, 545);
}

function comfortable(temp,humid,rain,cloud){

	var clothes = [];
	console.log(temp,humid,rain,cloud);
	if (temp > 30 && cloud < .1)
	{
		clothes.push("Hat");
	}
	if (temp < 30)
	{
		clothes.push("Wool Hat");
	}
	if (temp > 30 && cloud > .1)
	{
		clothes.push("No Hat");
	}
	if (temp > 65 && rain <.75)
	{
		clothes.push("T-Shirt");
	}
	if (temp > 55 && temp < 65&& rain <.75)
	{
		clothes.push("Long Sleeve T-Shirt");
	}
	if (temp > 50 && temp < 55&& rain <.75) 
	{
		clothes.push("Sweater");
	}
	if (temp > 45 && temp < 50&& rain <.75)
	{
		clothes.push("Sweatshirt");
	}
	if (temp>40 && temp < 45&& rain <.75)
	{
		clothes.push("Jacket");
	}
	if (temp>30 && temp <40&& rain <.75)
	{
		clothes.push("Heavy Jacket");
	}
	if (temp<30&& rain <.75)
	{
		clothes.push("Heavy Coat");
	}
	if (rain > .75)
	{
		clothes.push("Rain Gear");
	}
	if ((temp < 70 && humid < .80)||temp < 60)
	{
		clothes.push("Pants");
	}
	if(temp > 60 || (temp < 70 && humid > .80))
	{
		clothes.push("Shorts");
	}
	if(rain > .9)
	{
		clothes.push("Boots");
	}
	if(temp > 90 && rain < .9)
	{
		clothes.push("Flip Flops");
	}
	if (temp < 90 && rain < .9)
	{
		clothes.push("Shoes");
	}

	return clothes;
}

function hat_click_forwards() {
	if (hat+1 != hats.length)
	{
		hat+=1;
	}
	else
	{
		hat = 0;
	}
	display(hat,top_now,leg,shoe);
}

function top_click_forwards() {
	if (top_now+1 != tops.length)
	{
		top_now+=1;
	}
	else
	{
		top_now = 0;
	}
	display(hat,top_now,leg,shoe);
}

function leg_click_forwards() {
	if (leg+1 != leg.length)
	{
		leg+=1;
	}
	else
	{
		leg = 0;
	}
	display(hat,top_now,leg,shoe);
}

function shoe_click_forwards() {
	if (shoe+1 != shoes.length)
	{
		shoe+=1;
	}
	else
	{
		shoe = 0;
	}
	display(hat,top_now,leg,shoe);
}

function hat_click_backwards() {
	if (hat-1 != 0)
	{
		hat-=1;
	}
	else
	{
		hat = hats.length;
	}
	display(hat,top_now,leg,shoe);
}

function top_click_backwards() {
	if (top_now-1 != 0)
	{
		top_now-=1;
	}
	else
	{
		top_now = tops.length;
	}
	display(hat,top_now,leg,shoe);
}

function leg_click_backwards() {
	if (leg-1 != 0)
	{
		leg-=1;
	}
	else
	{
		leg = legs.length;
	}
	display(hat,top_now,leg,shoe);
}

function shoe_click_backwards() {
	if (shoe-1 != 0)
	{
		shoe-=1;
	}
	else
	{
		shoe = shoes.length;
	}
	display(hat,top_now,leg,shoe);
}

function thing(h,t,l,s, day, current) {
	if (current.icon == "clear-day") {
    fill(color("#DFF4ED"));
    var back = "#DFF4ED";
  }
  if (current.icon == "clear-night") {
    fill(color("#1C0E37"));
    var back = "#1C0E37";
  }
  if (current.icon == "rain") {
    fill(color("#566F97"));
    var back = "#566F97";
  }
  if (current.icon == "snow") {
    fill(color("#202070"));
    var back = "#202070";
  }
  if (current.icon == "sleet") {
    fill(color("#CDC9C9"));
    var back = "#CDC9C9";
  }
  if (current.icon == "wind") {
    fill(color("#CBD7D7"));
    var back = "#CBD7D7";
  }
  if (current.icon == "fog") {
    fill(color("#A7A69D"));
    var back = "#A7A69D";
  }
  if (current.icon == "cloudy") {
    fill(color("#CBC4BA"));
    var back = "#CBC4BA";
  }
  if (current.icon == "partly-cloudy-day") {
    fill(color("#9CAFF2"));
    var back = "#9CAFF2";
  }
  if (current.icon == "partly-cloudy-night") {
    fill(color("#787878"));
    var back = "#787878";
  }
  background(back);



  if (day.apparentTemperatureHigh <100 && day.apparentTemperatureHigh >90) {
    fill(color("#C9341C"));
  }
  if (day.apparentTemperatureHigh <90 && day.apparentTemperatureHigh >80) {
    fill(color("#C3412E"));
  }
  if (day.apparentTemperatureHigh <80 && day.apparentTemperatureHigh >70) {
    fill(color("#BE4E41"));
  }
  if (day.apparentTemperatureHigh <70 && day.apparentTemperatureHigh >60) {
    fill(color("#B85C54"));
  }
  if (day.apparentTemperatureHigh <60 && day.apparentTemperatureHigh >50) {
    fill(color("#B36967"));
  }
  if (day.apparentTemperatureHigh <50 && day.apparentTemperatureHigh >40) {
    fill(color("#AD777A"));
  }
  if (day.apparentTemperatureHigh <40 && day.apparentTemperatureHigh >30) {
    fill(color("#A8848D"));
  }
  if (day.apparentTemperatureHigh <30 && day.apparentTemperatureHigh >20) {
    fill(color("#A391A0"));
  }
  if (day.apparentTemperatureHigh <20 && day.apparentTemperatureHigh >10) {
    fill(color("#9D9FB3"));
  }
  if (day.apparentTemperatureHigh <10 && day.apparentTemperatureHigh >00) {
    fill(color("#98ACC6"));
  }
  if (day.apparentTemperatureHigh <00 && day.apparentTemperatureHigh >-10) {
    fill(color("#92BAD9"));
  }
  if (day.apparentTemperatureHigh <-10 && day.apparentTemperatureHigh >-20) {
    fill(color("#8DC7EC"));
  }
  if (day.apparentTemperatureHigh <-20 && day.apparentTemperatureHigh >-30) {
    fill(color("#88D5FF"));
  }
  noStroke();
  ellipse(0,0,640,640);
  fill(color(back));
	textSize(54);
	textAlign(LEFT);
	text(h, 5, 48);
	text(t, 5, 2*(60)-15);
	text(l, 5, 3*(60)-15);
	text(s, 5, 4*(60)-15);

  fill(color("#1733a8"));
  ellipse(320,568,640*day.precipProbability,640*day.precipProbability);

  

}