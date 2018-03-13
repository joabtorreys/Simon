var sound = new Audio("4.mp3");
var wrong = new Audio("wrong.mp3");
var userarr = [];
var simonarr = [];
var level = 0;


// variables.

$(document).ready(function() {
  // listen for start press
  $(".start").click(function() {
    //call cpu function.
    $(".start").off('click');
    cpu();


  });
  // now this is the player logic.
  $(".pad").click(function() {
    var number = $(this).attr('id');
    // got the number from the pad pressed.
    userarr.push(number);
    // pushed to userarr.
    var atag = "#" + number;
    // create jquery tag.
    setTimeout(function() {
      $(atag).removeClass('glow');
    }, 1000);
    // removed class.
    if (checker() == true) {

      $(atag).addClass('glow');
        sound.play();

      // if the sequence entered was true then i will check to see if the two arrays have the same length to call the cpu function.
      if (userarr.length == simonarr.length) {
        // reset userarr first.
        userarr = [];
        cpu()
      }

    } else {
      // show error and reset userarr.
      wrong.play();

      alert('SORRY YOUR STREAK ENDED AT LEVEL ' + level);

      location.reload();
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
      }, 1000);
      // set timeout to remove class.
      i++;
      // finally increment i so that the loop will continue for the length of the array, when the function is called again i will reset to 0.
    } else {
      clearInterval(int);
    }


  }, 2000);

}


// helper functions down.

function random() {
  return Math.floor(Math.random() * 4)
}

function checker() {
  // running a forloop here.
  for (var i = 0; i < userarr.length; i++) {
    if (userarr[i] != simonarr[i]) {
      return false;
    }
  }
  // i checked to see if th "i" element in both arrays are "not" correct, and if so it will return false otherwise it will run to the end of the array. so thats why i put the return true outside the forloop.
  return true;

}
