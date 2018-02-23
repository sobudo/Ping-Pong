// business logic
var numbergame = function(number) {
  if ((number % 3 === 0)) {
    return Ping;
  } else {
    return false;
  }
};

var numbergame = function(number) {
  if ((number % 5 == 0)) {
    return Pong;
  } else {
    return false;
  }
};

var numbergame = function(number) {
  if ((number % 3 === 0) && (number % 5 == 0)) {
    return Ping pong;
  } else {
    return false;
  }
};

// user interface logic
$(document).ready(function() {
  $("form#number-game").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = numbergame(number);

    $(".number").text(number);

    if (!result) { // same as writing if (result === false)
      $(".not").text("oops try again");
    } else {
      $(".not").text("correct");
    }

    $("#result").show();
  });
});
