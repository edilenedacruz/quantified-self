$(document).ready(function() {
  var today = moment();
  var currentDate = today;

  setDate();

function setDate() {
  var currentDate = moment();
  $('#date-header section').html(currentDate.format("MMMM Do, YYYY"));
}

  $('#previous-date').on('click', function(){
    currentDate = currentDate.add(-1, 'days');
    // loadDay();
  })


  $('#next-date').on('click', function(){
    currentDate = currentDate.add(1, 'days');
    debugger
    // loadDay();
  })

// function loadDay();
//   this should make ajax call to reset page with previous date data

})
