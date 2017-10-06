var queryResult;

function setup() {
  createCanvas(320, 568); //This is an iPhone 5 resolution. I can show you how to look as if it was on your phone later
  background(140);
  query();
}


// Run the API call
function query() {

  // URL for querying
  var url= 'https://api.darksky.net/forecast/436fdc35bab87ffdf2f6cf130fc5ddc5/42.361936, -71.097309'; // all you need to change is that really long number. You should get a number like that from darksky for signing up

  // Query the URL, set a callback
  // 'jsonp' is needed for security
  loadJSON(url, gotData, 'jsonp'); // need to do this. It sends the result to a function gotData, which we write later in the code. Might be able to send it to draw so it constantly updates but im not sure

}

// Request is completed
function gotData(data) {

  // console.log(data);
  queryResult = data; //this is taking the data in from the loadJSON and storing it as queryresults

  // only look at current results:
  var current = queryResult.currently; // this is how to look at the current weather
  var minute = queryResult.minutely.data.[0]; // this is how to look at the current minute
  var day = queryResult.daily.data[0]; // this is how to look at the current day

  /**

  The way they do the getting the numbers is weird. Say you want the high temp of the day. You get that by saying queryResult.daily.data[0].temperatureHigh (or whatever high temp is)
  the reason you need the [0] is because it stores the whole weeks worth of data in "data" in an array. You want to access the current day, 0. 

  If you want tomorrow's then you would say  [1] and so on and so forth

  **/

 var time = new Date(current.time*1000); // you can get the time from the data.It is stored as UNIX time rather than something weknow how to deal with. 

 //this line creates a Date object that we can use to figure out wtf Unix time is

 if(time.getTime()<sunrise.getTime() || time.getTime()>sunset.getTime()){ //the .getTime() allows you to see the actual time that it is in real people time
  	fill(0);
  	text("Night",xPos, yPos+27.5);
  }
  else{
  	fill(255);
  	text("Day",xPos, yPos+27.5);
  }

  // Yeah thats about all I got


}