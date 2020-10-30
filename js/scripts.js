//User-Interface logic
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("#anyNumber").val());
    console.log(number);
    const boop = beepBoop(number);

    var results= boop.join(',');

    $("#output").text(results);
  });
});


//Business Interface Logic
function beepBoop(number) {
  let resultsArray = [];
  for (let i=0; i = number; i++) {
    resultsArray.push([i]);
      if (resultsArray[i]){}
  }
}

