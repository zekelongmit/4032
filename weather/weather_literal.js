// Sketch for using the darksky API
// https://darksky.net/dev/docs
// This sketch requires you to start a local server or run it on a server
// See more about how to do that here:
// https://github.com/processing/p5.js/wiki/Local-server

var queryResult;

function setup() {
  createCanvas(320, 568);
  background(140);
  query();
}


// Run the API call
function query() {

  // URL for querying
  var url= 'https://api.darksky.net/forecast/10f387986cf9ddb5d2600e812e7e15d4/42.361936, -71.097309';

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
}

function middle_step(data) {

	  // console.log(data);
  queryResult = data;

  // only look at current results:
  var current = queryResult.currently;
  console.log(typeof(current.time)); // this shows that the current.time is in fact a "number" object
  console.log(current.time); // to check the actual time
  console.log(current.time+10); // using a number function becuase I did not believe the tyeof()
	// URL for querying
  var url= 'https://api.darksky.net/forecast/10f387986cf9ddb5d2600e812e7e15d4/42.361936, -71.097309, '+ current.time; // I feel like this should work

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp');
}

// Request is completed
function gotData(data) {
  translate(width/2,0);

  // console.log(data);
  queryResult = data;

  // only look at current results:
  var current = queryResult.currently;
  var minute = queryResult.minutely;
  var day = queryResult.daily.data[0];
  var tomorrow = queryResult.daily.data[1];
  


  
  // a few variables for text formatting 
  var textSizeLarge = 32;
  var textSizeSmall = 12;
  var yPos = 32;
  var yGap = 20; 
  var rect_height = 32*1.5;
  var number = 0;
  
// List relevant items of information
  fill(0);
  textStyle(BOLD);
  textAlign(CENTER);
  noStroke();
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

//DayTime
  fill(color(back));
  rect(-width/2,number*rect_height,320, rect_height);
  // var sunrise = new Date(day.sunriseTime*1000);
  // var sunset = new Date(day.sunsetTime*1000);
  // var time = new Date(current.time*1000);
  // textSize(textSizeLarge);
  // fill(color("#192154"));
  // rect(-width/2,0,320, yPos*1.5);
  // fill(color('#87CEFA'));
  // rect(.2*(sunrise.getHours()*60+sunrise.getMinutes())-width/2,number*rect_height,.2*(sunset.getHours()*60+sunset.getMinutes())-.2*(sunrise.getHours()*60+sunrise.getMinutes()), rect_height);
  // fill(color("#625b75")); //sunset
  // rect(.2*(sunset.getHours()*60+sunset.getMinutes())-width/2, number*rect_height, 10, rect_height);
  // fill(color("#4bb8b6"));//sunrise
  // rect(.2*(sunrise.getHours()*60+sunrise.getMinutes())-width/2, number*rect_height, 10, rect_height);
  // fill(0);
  // if(time.getTime()<sunrise.getTime() || time.getTime()>sunset.getTime()){
  // 	fill(0);
  // 	text("Night",0, yPos);
  // }
  // else{
  // 	fill(255);
  // 	text("Day",0, yPos);
  // }
  yPos+=textSizeLarge+yGap;
  number +=1;


// High Tmp

  fill(color(back));
  rect(-width/2,number*rect_height,320, rect_height);
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
  rect(-1.5*day.apparentTemperatureHigh,number*rect_height,3*day.apparentTemperatureHigh, rect_height);
  fill(255);
  textSize(textSizeLarge);
  stroke(0);
  strokeWeight(2);
  text("\u21E1 " + floor(day.apparentTemperatureHigh) + "º",0, yPos-3);
  noStroke();
  yPos+=yGap+textSizeLarge-5;
  number+=1;

//Temp
  fill(color(back));
  rect(-width/2,number*rect_height,320, rect_height);
  if (current.apparentTemperature <100 && current.apparentTemperature >90) {
    fill(color("#C9341C"));
  }
  if (current.apparentTemperature <90 && current.apparentTemperature >80) {
    fill(color("#C3412E"));
  }
  if (current.apparentTemperature <80 && current.apparentTemperature >70) {
    fill(color("#BE4E41"));
  }
  if (current.apparentTemperature <70 && current.apparentTemperature >60) {
    fill(color("#B85C54"));
  }
  if (current.apparentTemperature <60 && current.apparentTemperature >50) {
    fill(color("#B36967"));
  }
  if (current.apparentTemperature <50 && current.apparentTemperature >40) {
    fill(color("#AD777A"));
  }
  if (current.apparentTemperature <40 && current.apparentTemperature >30) {
    fill(color("#A8848D"));
  }
  if (current.apparentTemperature <30 && current.apparentTemperature >20) {
    fill(color("#A391A0"));
  }
  if (current.apparentTemperature <20 && current.apparentTemperature >10) {
    fill(color("#9D9FB3"));
  }
  if (current.apparentTemperature <10 && current.apparentTemperature >00) {
    fill(color("#98ACC6"));
  }
  if (current.apparentTemperature <00 && current.apparentTemperature >-10) {
    fill(color("#92BAD9"));
  }
  if (current.apparentTemperature <-10 && current.apparentTemperature >-20) {
    fill(color("#8DC7EC"));
  }
  if (current.apparentTemperature <-20 && current.apparentTemperature >-30) {
    fill(color("#88D5FF"));
  }
  rect(-1.5*current.apparentTemperature,number*rect_height,3*current.apparentTemperature, rect_height);
  push();
  fill(255);
  textSize(textSizeLarge);
  stroke(0);
  strokeWeight(2);
  text(current.apparentTemperature + "º",0, yPos-2);
  noStroke();
  pop();
  yPos+=yGap +textSizeLarge;
  number+=1;

//Low Temp

  fill(color(back));
  rect(-width/2,number*rect_height,320, rect_height);
  if (day.apparentTemperatureLow <100 && day.apparentTemperatureLow >90) {
    fill(color("#C9341C"));
  }
  if (day.apparentTemperatureLow <90 && day.apparentTemperatureLow >80) {
    fill(color("#C3412E"));
  }
  if (day.apparentTemperatureLow <80 && day.apparentTemperatureLow >70) {
    fill(color("#BE4E41"));
  }
  if (day.apparentTemperatureLow <70 && day.apparentTemperatureLow >60) {
    fill(color("#B85C54"));
  }
  if (day.apparentTemperatureLow <60 && day.apparentTemperatureLow >50) {
    fill(color("#B36967"));
  }
  if (day.apparentTemperatureLow <50 && day.apparentTemperatureLow >40) {
    fill(color("#AD777A"));
  }
  if (day.apparentTemperatureLow <40 && day.apparentTemperatureLow >30) {
    fill(color("#A8848D"));
  }
  if (day.apparentTemperatureLow <30 && day.apparentTemperatureLow >20) {
    fill(color("#A391A0"));
  }
  if (day.apparentTemperatureLow <20 && day.apparentTemperatureLow >10) {
    fill(color("#9D9FB3"));
  }
  if (day.apparentTemperatureLow <10 && day.apparentTemperatureLow >00) {
    fill(color("#98ACC6"));
  }
  if (day.apparentTemperatureLow <00 && day.apparentTemperatureLow >-10) {
    fill(color("#92BAD9"));
  }
  if (day.apparentTemperatureLow <-10 && day.apparentTemperatureLow >-20) {
    fill(color("#8DC7EC"));
  }
  if (day.apparentTemperatureLow <-20 && day.apparentTemperatureLow >-30) {
    fill(color("#88D5FF"));
  }
  rect(-1.5*day.apparentTemperatureLow,number*rect_height,3*day.apparentTemperatureLow, rect_height);
  fill(255);
  textSize(textSizeLarge);
  stroke(0);
  strokeWeight(2);
  text("\u21E3 " + floor(day.apparentTemperatureLow) + "º",0, yPos-3);
  noStroke();
  yPos+=yGap+textSizeLarge-5;
  number+=1;

//Rain Chance
  
  
  fill(color(back));
  rect(-width/2,number*rect_height,320, rect_height);
  fill(color("#1733a8"));
  rect(-(day.precipProbability*320/2), number*rect_height,(day.precipProbability*320), rect_height);
  fill(255);
  textSize(textSizeLarge);
  stroke(0);
  strokeWeight(2);
  text("\u26C6 " + day.precipProbability*100 + "%",0, yPos-2);
  noStroke();
  yPos+=yGap+ textSizeLarge-5;
  number+=1;



//Summary
  fill(color(back));
  rect(-width/2,number*rect_height,320, rect_height);
  fill(255);
  textSize(textSizeLarge);
  stroke(0);
  strokeWeight(2);
  text(current.summary,0, yPos);
  noStroke();
  yPos+=yGap/2+textSizeLarge;
  number+=1;

//Humidity
  
  fill(color(back));
  rect(-width/2,number*rect_height,320, rect_height);
  fill(color("#8FC9CB"));
  rect(-(current.humidity*320/2), number*rect_height,(current.humidity*320), rect_height);
  fill(255);
  textSize(textSizeLarge);
  stroke(0);
  strokeWeight(2);
  text(floor(current.humidity*100) + "% Humidity",0, yPos+2);
  noStroke();
  yPos+=yGap+textSizeLarge;
  number+=1;

// Cloud Cover

  fill(color(back));
  rect(-width/2,number*rect_height,320, rect_height);
  fill(color("#EDEDED"));
  rect(-(current.cloudCover*320/2), number*rect_height,(current.cloudCover*320), rect_height);
  fill(255);
  textSize(textSizeLarge);
  stroke(0);
  strokeWeight(2);
  text("\u2601 " + floor(current.cloudCover *100) + "%",0, yPos);
  noStroke();
  yPos+=yGap+textSizeLarge-5;
  number+=1;



//High tomorrow

  fill(color(back));
  rect(-width/2,number*rect_height,320, rect_height);
  if (tomorrow.apparentTemperatureHigh <100 && tomorrow.apparentTemperatureHigh >90) {
    fill(color("#C9341C"));
  }
  if (tomorrow.apparentTemperatureHigh <90 && tomorrow.apparentTemperatureHigh >80) {
    fill(color("#C3412E"));
  }
  if (tomorrow.apparentTemperatureHigh <80 && tomorrow.apparentTemperatureHigh >70) {
    fill(color("#BE4E41"));
  }
  if (tomorrow.apparentTemperatureHigh <70 && tomorrow.apparentTemperatureHigh >60) {
    fill(color("#B85C54"));
  }
  if (tomorrow.apparentTemperatureHigh <60 && tomorrow.apparentTemperatureHigh >50) {
    fill(color("#B36967"));
  }
  if (tomorrow.apparentTemperatureHigh <50 && tomorrow.apparentTemperatureHigh >40) {
    fill(color("#AD777A"));
  }
  if (tomorrow.apparentTemperatureHigh <40 && tomorrow.apparentTemperatureHigh >30) {
    fill(color("#A8848D"));
  }
  if (tomorrow.apparentTemperatureHigh <30 && tomorrow.apparentTemperatureHigh >20) {
    fill(color("#A391A0"));
  }
  if (tomorrow.apparentTemperatureHigh <20 && tomorrow.apparentTemperatureHigh >10) {
    fill(color("#9D9FB3"));
  }
  if (tomorrow.apparentTemperatureHigh <10 && tomorrow.apparentTemperatureHigh >00) {
    fill(color("#98ACC6"));
  }
  if (tomorrow.apparentTemperatureHigh <00 && tomorrow.apparentTemperatureHigh >-10) {
    fill(color("#92BAD9"));
  }
  if (tomorrow.apparentTemperatureHigh <-10 && tomorrow.apparentTemperatureHigh >-20) {
    fill(color("#8DC7EC"));
  }
  if (tomorrow.apparentTemperatureHigh <-20 && tomorrow.apparentTemperatureHigh >-30) {
    fill(color("#88D5FF"));
  }
  rect(-1.5*tomorrow.apparentTemperatureHigh,number*rect_height,3*tomorrow.apparentTemperatureHigh, rect_height);  
  fill(255);
  textSize(textSizeLarge);
  stroke(0);
  strokeWeight(2);
  text("\u21E1 " + floor(tomorrow.apparentTemperatureHigh) + "º \u21E2",0, yPos);
  noStroke();
  yPos+=yGap+textSizeLarge-5;
  number+=1;

//Low tomorrow

  fill(color(back));
  rect(-width/2,number*rect_height,320, rect_height);
  if (tomorrow.apparentTemperatureLow <100 && tomorrow.apparentTemperatureLow >90) {
    fill(color("#C9341C"));
  }
  if (tomorrow.apparentTemperatureLow <90 && tomorrow.apparentTemperatureLow >80) {
    fill(color("#C3412E"));
  }
  if (tomorrow.apparentTemperatureLow <80 && tomorrow.apparentTemperatureLow >70) {
    fill(color("#BE4E41"));
  }
  if (tomorrow.apparentTemperatureLow <70 && tomorrow.apparentTemperatureLow >60) {
    fill(color("#B85C54"));
  }
  if (tomorrow.apparentTemperatureLow <60 && tomorrow.apparentTemperatureLow >50) {
    fill(color("#B36967"));
  }
  if (tomorrow.apparentTemperatureLow <50 && tomorrow.apparentTemperatureLow >40) {
    fill(color("#AD777A"));
  }
  if (tomorrow.apparentTemperatureLow <40 && tomorrow.apparentTemperatureLow >30) {
    fill(color("#A8848D"));
  }
  if (tomorrow.apparentTemperatureLow <30 && tomorrow.apparentTemperatureLow >20) {
    fill(color("#A391A0"));
  }
  if (tomorrow.apparentTemperatureLow <20 && tomorrow.apparentTemperatureLow >10) {
    fill(color("#9D9FB3"));
  }
  if (tomorrow.apparentTemperatureLow <10 && tomorrow.apparentTemperatureLow >00) {
    fill(color("#98ACC6"));
  }
  if (tomorrow.apparentTemperatureLow <00 && tomorrow.apparentTemperatureLow >-10) {
    fill(color("#92BAD9"));
  }
  if (tomorrow.apparentTemperatureLow <-10 && tomorrow.apparentTemperatureLow >-20) {
    fill(color("#8DC7EC"));
  }
  if (tomorrow.apparentTemperatureLow <-20 && tomorrow.apparentTemperatureLow >-30) {
    fill(color("#88D5FF"));
  }
  rect(-1.5*tomorrow.apparentTemperatureLow,number*rect_height,3*tomorrow.apparentTemperatureLow, rect_height);
  fill(255);
  textSize(textSizeLarge);
    stroke(0);
    strokeWeight(2); 
    text("\u21E3 " + floor(tomorrow.apparentTemperatureLow) + "º \u21E2",0, yPos);
  noStroke();
  yPos+=yGap+textSizeLarge-5;
  number+=1;

//Rain tomorrow

  fill(color(back));
  rect(-width/2,number*rect_height,320, rect_height);
  fill(color("#1733a8"));
  rect(-(tomorrow.precipProbability*320/2), number*rect_height,(tomorrow.precipProbability*320), rect_height);
  fill(255);
  textSize(textSizeLarge);
  stroke(0);
  strokeWeight(2);
  text("\u26C6 " + tomorrow.precipProbability*100 + "% \u21E2",0, yPos+2);
  noStroke();
  yPos+=yGap+textSizeLarge;
  number+=1;

// Wind
  fill(color(back));
  rect(-width/2,number*rect_height,320, rect_height);
  // textSize(textSizeLarge);
  // if (current.windBearing <22.5 || current.windBearing >(360-22.5)) {
  //   var direction = "N";
  // }
  // if (current.windBearing >22.5 || current.windBearing <(90-22.5)) {
  //   var direction = "NE";
  // }
  // else if (current.windBearing <(90-22.5) || current.windBearing >(90+22.5)) {
  //   var direction = "E";
  // }
  // else if (current.windBearing <(135-22.5) || current.windBearing >(135+22.5)) {
  //   var direction = "SE";
  // }
  // else if (current.windBearing <(180-22.5) || current.windBearing >(180+22.5)) {
  //   var direction = "S";
  // }
  // else if (current.windBearing <(225-22.5) || current.windBearing >(225+22.5)) {
  //   var direction = "SW";
  // }
  // else if (current.windBearing <(270-22.5) || current.windBearing >(270+22.5)) {
  //   var direction = "W";
  // }
  // else if (current.windBearing <(315-22.5) || current.windBearing >(315+22.5)) {
  //   var direction = "NW";
  // }
  // fill(color("#19BB54"));
  // rect(-width/2,number*rect_height,320, rect_height);
  // fill(255);
  //   stroke(0);
  //   strokeWeight(2);
  //   text(current.windSpeed + " mph " + direction,0, yPos-3);
    
  noStroke();
  yPos+=yGap+textSizeLarge-5;
  number+=1;



 


}
