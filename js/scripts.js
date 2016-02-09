var leetspeak = function(word) {


     var leetWord = word.replace(/e|E/g,"3").replace(/o|O/g,"0")
     .replace(/I/g,"1").replace(/s/g,"z");
    //  if (word[0].toLowerCase()==="s"){
     //
    //    return this.charAt(0).toUpperCase() + leetWord;
    //  }

   return leetWord;




};

$(document).ready(function() {
  $("form#leetspeak").submit(function(event) {
    var word = $("input#words").val();



    var result = leetspeak(word);


    $("#demo").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
