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
    currentDate = currentDate.add(-1, 'days');
    setDate(currentDate);
    saveDateToDatabase();

  })


  $('#next-date').on('click', function(){
    var previousDate = currentDate.add(1, 'days');
    setDate(previousDate)
    saveDateToDatabase();

  })


function saveDateToDatabase() {
  var formattedDate = currentDate.format("YYYY-MM-DD");
  var dateParams = { date: formattedDate }
  $.ajax({
    url: "https://be-quantified-self.herokuapp.com/api/v1/diaries",
    method: 'POST',
    data: dateParams
  })
  .then(finish)
  .catch(function(error){
    console.error(error)
})
}

function finish(data) {
  $('#total-calories').append(
    '<tr>' +
    '<td style="display:none">' + data.id + '</td>' +
    '<td contenteditable="true" onblur="setGoalCalories(this)" onkeypress="return setGoalCalories(this, event)"class="text-center" id="total-calories-row">' + data.total_calories + '</td>' +
    '<td class="text-center" id="consumed">' + 0 + '</td>' +
    '<td class="text-center" id="remaining">' + 0 + '</td>' +
    '</tr>'
  )

  $("#date-data-id")[0].innerHTML = data.id
  clearMealTables()
  populateMealTablesOne(data.id)
  populateMealTablesTwo(data.id)
  populateMealTablesThree(data.id)
  populateMealTablesFour(data.id)

}

})
