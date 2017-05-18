// var mealTables = require('./populateMealTables.js')

$(document).ready(function() {
  var currentDate = moment();

  setDate(currentDate);
  getFoodsForIndex();
  saveDateToDatabase(currentDate);

function setDate(currentDate) {
  $('#date-header section').html(currentDate.format("MMMM Do, YYYY"));
}

  $('#previous-date').on('click', function(){
    clearRemainingCaloriesOnReload()
    currentDate = currentDate.add(-1, 'days');
    setDate(currentDate);
    getFoodsForIndex()
    saveDateToDatabase();
  })


  $('#next-date').on('click', function(){
    clearRemainingCaloriesOnReload()
    var previousDate = currentDate.add(1, 'days');
    setDate(previousDate)
    saveDateToDatabase();
  })


function saveDateToDatabase() {
  var formattedDate = currentDate.format("YYYY-MM-DD");
  var dateParams = { date: formattedDate }
  $.ajax({
    url: "http://localhost:3000/api/v1/diaries",
    method: 'POST',
    data: dateParams
  })
  .then(cascading)
  .catch(function(error){
    console.error(error)
})
}

})
function cascading(data) {

  $("#date-data-id")[0].innerHTML = data.id
  clearMealTables()
  populateMealTablesOne(data.id)
  populateMealTablesTwo(data.id)
  populateMealTablesThree(data.id)
  populateMealTablesFour(data.id)

}
