
var i;
var text = "";
var milliSecPerDay = 1000 * 60 * 60 * 24;
var x = "";
var defaultText= "";

var premierLeague = [
	{teamName: "Arsenal", manager:"Arsene Wenger", appointed: new Date("1996-09-30")}, 
	{teamName: "Aston Villa", manager:"Tim Sherwood", appointed: new Date("2014-02-14")}, 
	{teamName: "Bournemouth", manager:"Eddie Howe", appointed: new Date ("2012-10-12")},
 	{teamName: "Chelsea", manager:"Jose Mourinho", appointed: new Date("2013-06-03")},
	{teamName: "Crystal Palace", manager:"Alan Pardew", appointed: new Date("2015-01-03")},
	{teamName: "Everton", manager:"Roberto Martinez", appointed: new Date("2013-06-05")},
	{teamName: "Leicester", manager:"Claudio Ranieri", appointed: new Date("2015-07-13")},
	{teamName: "Liverpool", manager:"Brendan Rodgers", appointed: new Date("2012-06-01")},
	{teamName: "Man City", manager:"Manuel Pellegrini", appointed: new Date("2013-06-14")},
	{teamName: "Man Utd", manager:"Louis Van Gaal", appointed: new Date("2014-07-19")},
	{teamName: "Newcastle", manager:"Steve McClaren", appointed: new Date("2015-06-10")},
	{teamName: "Norwich", manager:"Alex Neil", appointed: new Date("2015-01-09")},
	{teamName: "Southampton", manager:"Ronald Koeman", appointed: new Date("2014-06-16")},
	{teamName: "Stoke", manager:"Mark Hughes", appointed: new Date("2013-05-30")},
	{teamName: "Sunderland", manager:"Dick Advocaat", appointed: new Date("2015-05-17")},
	{teamName: "Swansea", manager:"Garry Monk", appointed: new Date("2013-05-07")},
	{teamName: "Spurs", manager:"Mauricio Pochettino", appointed: new Date("2014-05-27")},
	{teamName: "Watford", manager:"Quique Sanchez Flores", appointed: new Date("2015-06-05")},
	{teamName: "West Brom", manager:"Tony Pulis", appointed: new Date("2015-01-01")},
	{teamName: "West Ham", manager:"Slaven Bilic", appointed: new Date("2015-06-09")}



];

// Used to sort the array of objects in order of earliest date
function sortFunction(a,b){  
    var dateA = new Date(a.appointed).getTime();
    var dateB = new Date(b.appointed).getTime();
    return dateA > dateB ? 1 : -1;  
}


// Work out the number of days between date appointed and today's date.
function daysBetweenDates (date1, date2) {

    var oneDay_ms = 1000 * 60 * 60 * 24;
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    var difference_ms = Math.abs(date1_ms - date2_ms);
    
    return Math.round(difference_ms/oneDay_ms);
}



function displayFunction(text, days) {
    var managerText = text;
    var managerDays = days;
    document.getElementById("managerName").innerHTML = managerText;
    document.getElementById("managerImage").innerHTML = "<img id=\"portrait\" src=\"images/" + managerText + ".jpg\">";
    document.getElementById("managerTime").innerHTML = managerDays + " days in charge";
        
}


premierLeague.sort(sortFunction);

// loop through and print data in rows
for (i = 0; i < premierLeague.length; i++){

	var d = premierLeague[i].appointed;
        var managerText = premierLeague[i].manager;
        var count = i+1;
        var today = new Date();
        var days = daysBetweenDates (d, today);
	text += "<ul id=\"row" + i%2 + "\" class=\"main-data\"><a href=\"#\" onclick='displayFunction(\"" + managerText + "\", " + days + ")'><li class=\"no\">" + count + "</li><li class=\"manager\">" + premierLeague[i].manager + "</li><li class=\"team\">" + premierLeague[i].teamName + "</li><li class=\"date\">" + d.toDateString() + "</li><li></li></a></ul>";

}

document.getElementById("data").innerHTML = text;

// Set default manager details for the top result when page loads.
var defaultText = premierLeague[0].manager;
var defaultDays = daysBetweenDates (premierLeague[0].appointed, today);
displayFunction(defaultText, defaultDays);







