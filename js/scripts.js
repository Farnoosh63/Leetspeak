var myfunction = function(argument) {
  if()
      return true;

}else {
  return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    // var year = parseInt($("input#year").val());
    // var result = leapYear(year);
    //
    // $(".year").text(year);
    //
    // if (result === false) {                 // same as writing if (result === false)
    //   $(".not").text("not");
    // } else {
    //   $(".not").text("");
    // }

    $("#result").show();
    event.preventDefault();
  });
});