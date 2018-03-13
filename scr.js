var sound = new Audio("4.mp3");
var userarr = [];
var simonarr = ['1','2'];
var level = 0;


// variables.

$(document).ready(function() {
  // listen for start press
  $(".start").click(function() {
    //call cpu function.
  //  cpu();


  });
  // now this is the player logic.
$(".pad").click(function () {
var number = $(this).attr('id');
// got the number from the pad pressed.
userarr.push(number);
// checking if player entered it correct
if (checker() == true) {
  console.log('ok got it');
} else {
  // show error and reset userarr.
userarr = [];
alert('got it wrong');
}

});


});
// this is the end of document ready.

function cpu() {
  var i = 0;
  level++;
  $(".display").text(level);
  // up level and add it to display
  var ran = random().toString();
  // get a random num and turn it to string.
  simonarr.push(ran);
  // start interval.
  var int = setInterval(function() {
    // using i to loop through simmonarr.
    if (i < simonarr.length) {
      var tag = "#" + simonarr[i];
      // tag is equal to simmonarr i.
      $(tag).addClass('glow');
      sound.play();
      // add class and play sound for that color.
      setTimeout(function() {
        $(tag).removeClass('glow')
      }, 500);
      // set timeout to remove class.
      i++;
      // finally increment i so that the loop will continue for the length of the array, when the function is called again i will reset to 0.
    } else {
      clearInterval(int);
    }


  }, 1000);

}


// helper functions down.

function random() {
  return Math.floor(Math.random() * 4)
}

function checker() {




  
}
