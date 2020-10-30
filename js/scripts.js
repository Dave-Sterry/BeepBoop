//User-Interface logic
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    const number = parseInt($("#number").val());
    const boop = beepBoop(number);

    let results = boop.join(" , ");
    $("#output").text(results);
  });
  $('#clear').click(function() {
    $('#output').hide();
  });
  $('#reset').click(function() {
    $('#userInput').resetForm();
  })
});


//Business Interface Logic
function beepBoop(number) {
  let resultsArray = [];
  for (let i=0; i <= number; i++) {
    resultsArray.push([i]);
      if (resultsArray[i].toString().includes(3)){
        resultsArray[i]="Wont you be my neighbor";
      } else if (resultsArray[i].toString().includes(2)){
        resultsArray[i]= "Boop";
      } else if (resultsArray[i].toString().includes(1)){
        resultsArray[i]= "Beep";
      }
  }
  //currently wont return single results for double digit numbers, lists all elements in the array. 
  return resultsArray;
}

