
/*var num = prompt("How many series have you watched on our website? ? ");
console.log(num);
if (num >= 5) {
 alert("hello you are one from our family Please tell others about us")
 document.write("<p style='color:red;'> This became " + num + " series from our website </p>")
} else if(num < 5) {
  alert("We hope you have a great time to come back and watch another series")
  document.write("<p style='color:red;'> This became " + num + " series from our website </p>")
}*/







/*var kindwatch = prompt("How do you prefer to watch your series? Choose if online ,download ")
while (kindwatch != "online" && kindwatch!= "download") {

    kindwatch = prompt("please enter on of : online, download");
  }
  var numser = prompt("How many series have you watched on our website?")
   var output="";
  for (var i=0 ; i<numser; i++)
   {
    var output = output +  "<img src='https://money-h.com/picture//fin-will_1/how-to-encourage-someone-in-3-steps.jpg' width='50px'; />";
  }
 document.write(output);*/

  
var kindwatch = prompt("How do you prefer to watch your series? Choose if online ,download ")

function kindwatchfun() {

  while (kindwatch != "online" && kindwatch!= "download") {

    kindwatch = prompt("please enter on of : online, download");
  }

 }

kindwatchfun();



var numser = prompt("How many series have you watched on our website?")

var numserfun = function () {
  var output='';
  
  for (var i=0 ; i<numser; i++)
   {
   output = output +  "<img src='https://money-h.com/picture//fin-will_1/how-to-encourage-someone-in-3-steps.jpg' width=50px; />"
  }
  return output;
}
var result = numserfun();
 document.write(result);









