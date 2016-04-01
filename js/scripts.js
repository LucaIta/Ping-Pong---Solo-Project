/* businnes logic START */

var userInput = 0;
var arrayNumUpToUserInput = [];

var contToUserInput = function(numberToReach){
  var arrayNum = [];
  for (index = 1 ; index <= numberToReach ; index ++){
    arrayNum.push(index);
  }
  return arrayNum;
}

/* businnes logic END */

/* user logic START */

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    userInput = (parseInt($("#userInput").val()));
    arrayNumUpToUserInput = (contToUserInput(userInput));
    console.log(arrayNumUpToUserInput);
  })
});

/* user logic END */
