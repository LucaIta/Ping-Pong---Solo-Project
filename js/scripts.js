/* businnes logic START */

/* this following function creates an array of numbers up to the one inserted by the user */

var contToUserInput = function(numberToReach){
  var arrayNum = [];
  for (index = 1 ; index <= numberToReach ; index ++){
    arrayNum.push(index);
  }
  return arrayNum;
}

/* this following function replace certain numbers with the words Ping and Pong */

var pingPongFunction = function(arrayToModify){
  indexPosition = 0;
  arrayToModify.forEach(function(numberToCheck){
  if (numberToCheck % 15 === 0) {
    arrayToModify[indexPosition] = "pingpong";
  } else if (numberToCheck % 5 === 0) {
    arrayToModify[indexPosition] = "pong";
  } else if (numberToCheck % 3 === 0) {
    arrayToModify[indexPosition] = "ping";
  }
  indexPosition ++;
  });
  return arrayToModify;
};

/* businnes logic END */

/* user interface logic START */

$(document).ready(function(){
  var mode = 1; /* remove */
  $("form").submit(function(event){
    event.preventDefault();
    $("ul").empty();
    var userInput = (parseInt($("#userInput").val()));
    var arrayNumUpToUserInput = (contToUserInput(userInput));
    var arrayNumPingPonged = (pingPongFunction(arrayNumUpToUserInput));
    arrayNumPingPonged.forEach(function(outputListElement){
      $("#output").append("<li>" + outputListElement + "</li>")
    });
  });
  
    $("#btnMode1").click(function(){ /* remove */
      mode = 1;  /* remove */
      console.log(mode); /* remove */
    })

   $("#btnMode2").click(function(){ /* remove */
     mode = 2;  /* remove */
     console.log(mode); /* remove */
   })
  })


/* user interface logic END */
