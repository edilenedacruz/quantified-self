// require('./populateData.js')

$(document).ready(function() {
  var currentDate = moment();

  setDate(currentDate);
  getFoodsForIndex()

function setDate(currentDate) {
  $('#date-header section').html(currentDate.format("MMMM Do, YYYY"));
}

  $('#previous-date').on('click', function(){
    currentDate = currentDate.add(-1, 'days');
    setDate(currentDate);
    
    // loadDay() 2017-05-15;
  })


  $('#next-date').on('click', function(){
    currentDate = currentDate.add(1, 'days');
    setDate(currentDate)
    // loadDay();
  })

// function loadDay();
//   this should make ajax call to reset page with previous date data

})
