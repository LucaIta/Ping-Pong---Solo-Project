/* businnes logic START */

/* this following function creates an array of numbers up to the one inserted by the user */

var contToUserInput = function(numberToReach){
  var arrayNum = [];
  for (index = 1 ; index <= numberToReach ; index ++){
    arrayNum.push(index);
  }
  return arrayNum;
}

/* this following function display the output to the user */

var outputDisplayer = function(elementsToDisplay){
  elementsToDisplay.forEach(function(elementToDisplay){
    $("#output").append("<li>" + elementToDisplay + "</li>")
  });
};

/* this following function replace certain numbers with the words Ping and Pong */

var pingPongFunction = function(arrayToModify){
  indexPosition = 0;
  arrayToModify.forEach(function(numberToCheck){
    if (mode === 1 || mode === 3){
      if (numberToCheck % 15 === 0) {
        arrayToModify[indexPosition] = "pingpong";
      } else if (numberToCheck % 5 === 0) {
        arrayToModify[indexPosition] = "pong";
      } else if (numberToCheck % 3 === 0) {
        arrayToModify[indexPosition] = "ping";
      };

/* this section of the function replace certain numbers with gifs instead of words */

    } else if (mode === 2){
      if (numberToCheck % 15 === 0) {
        arrayToModify[indexPosition] = "<img src=img/ping.gif>";
      } else if (numberToCheck % 5 === 0) {
        arrayToModify[indexPosition] = "<img src=img/pingpong.gif>";
      } else if (numberToCheck % 3 === 0) {
        arrayToModify[indexPosition] = "<img src=img/pingpong2.gif>";
      };
    };

    indexPosition ++;
  });
  return arrayToModify;
};

/* businnes logic END */

/* user interface logic START */

var mode = 1;
var userInput = 0;
var arrayNumUpToUserInput = [];
var arrayNumPingPonged = [];
var clicks = 0;

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("ul").empty();
    userInput = (parseInt($("#userInput").val()));
    arrayNumUpToUserInput = (contToUserInput(userInput));
    arrayNumPingPonged = (pingPongFunction(arrayNumUpToUserInput));
    if (mode === 1 || mode ===2){
      outputDisplayer(arrayNumPingPonged);
    } else {
      $("#output").append("<li>" + arrayNumPingPonged[clicks] + "</li>");
      clicks ++;
    }
  });

  $("#btnMode1").click(function(){
    mode = 1;
    $("html").removeClass();
    $("html").addClass("standardClass");
  })

  $("#btnMode2").click(function(){
    mode = 2;
    $("html").removeClass();
    $("html").addClass("pingPongAnime");
  })

/* the following 2 buttons control the step mode */

  $("#stepMode").click(function(){
    $("ul").empty();
    mode = 3;
    $("button#stepper").show();
    $("button#stepMode").hide();
  })

  $("#stepper").click(function(){
    if (clicks < userInput){
    $("#output").append("<li>" + arrayNumPingPonged[clicks] + "</li>")
    clicks ++;
    } else {
      clicks = 0;
      $("button#stepper").hide();
      $("button#stepMode").show();
    };
  });
})

/* user interface logic END */
