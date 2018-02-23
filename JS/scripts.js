// business logic
var numbergame = function(number) {
  if ((number % 2 === 0) || (number % 3 == 0) || (number % 4 === 0)) {
    return true;
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
