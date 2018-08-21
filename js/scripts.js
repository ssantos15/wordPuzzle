$(document).ready(function() {
  $("#sentenceForm").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    for(var index=0;index<sentence.length;index+=1) {
      var sentence = sentence.replace("a", "  ").replace("e", "  ").replace("i","  ").replace("o", "  ").replace("u", "  ");
    }
    $("#result").append(sentence);
  });
});
