var buttonColors= ["blue","green","red","yellow"];

var gamePattern = [];

 function nextSequence(){
     var randomNumber = Math.floor(Math.random()*4);
   
     var randomChosenColor = buttonColors[randomNumber];
    
     gamePattern.push(randomChosenColor);

     $("#" + randomChosenColor).fadeOut(100);

       var audio = new audio("/sounds/" + randomChosenColor + ".mp3");
       audio.play();
    
      $("btn").click(handler(){

       var userChosenColor = $("#")

      });
 }



 
// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];

// function nextSequence() {

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

  
//   $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  
// //   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
// //   audio.play();
// }
