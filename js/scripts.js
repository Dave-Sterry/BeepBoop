//User-Interface logic
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("#number").val());
    const boop = beepBoop(number);

    let results = boop.join(" , ");
    $("#output").text(results);
  });
});


//Business Interface Logic
function beepBoop(number) {
  let resultsArray = [];
  for (let i=0; i <= number; i++) {
    resultsArray.push([i]);
      if (resultsArray[i].toString().includes(3)) {
        resultsArray[i]="Wont you be my neighbor?";
      } else if (resultsArray[i].toString().includes(2)){
        resultsArray[i]= "Boop";
      } else if (resultsArray[i].toString().includes(1)){
        resultsArray[i]= "Beep";
      }
  }
  return resultsArray;
}

