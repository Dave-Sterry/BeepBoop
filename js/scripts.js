//User-Interface logic
$(document).ready(function() {
  $(userInput).submit(function(event) {
    event.preventDefault();
    const number = parseInt($("#anyNumber").val());
    const boop = beepBoop(number);

    var results= boop.join(',');

    $("#output").text(results);
  });
});


//Business Interface Logic
function beepBoop(number);
