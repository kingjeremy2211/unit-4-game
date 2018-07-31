    //start all js scripts with this:
$( document ).ready(function(){
    //This creates variable 'random' that generates random number between 1 & 120
    var Random = Math.floor(Math.random()*120)+1;
    //This displays computer generated random number to 'randomnumber' div
    $("#randomNumber").text(Random);
    //These variables are for each crystal
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    // console.log(num1,num2,num3,num4);
    // These are variables to allow wins/losses and scorekeeping
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    //  Declaring variables for wins/losses score
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
  // Adds animation to specific elements
  $('.header').addClass('animated bounceInLeft');
  $('.instructions').addClass('animated bounceInRight');
  $('.numberToMatch').addClass('animated bounceInLeft');
  $('.winsAndLosses').addClass('animated bounceInRight');
  $('.userTotal').addClass('animated bounceInLeft');
  $('.gems').addClass('animated bounceInRight');
  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*120+1);
        // console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 
  //adds wins to the userTotal
  function win(){
  alert("You won!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }
  //adds losses to the userTotal
  function loss(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }
  //sets up click for jewels
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      // console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
      
            //sets win/lose conditions
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loss();
          }   
    })  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      // console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loss();
          } 
    })  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      // console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);
      //sets win/lose conditions
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loss();
          } 
    })  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      // console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loss();
          }
    });  
  }); 