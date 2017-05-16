// require('./populateData.js')

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

function saveDateToDatabase(currentDate) {
  var formattedDate = currentDate.format("YYYY-MM-DD");
  var dateParams = { date: formattedDate }
  $.ajax({
    url: "http://localhost:3000/api/v1/diaries",
    method: 'POST',
    data: dateParams
  })
  .then(finish)
  .catch(function(error){
    console.error(error)
})
}

function finish(data) {
  // debugger;
  // console.log(data)
  $('#total-calories').append(
    '<tr>' +
    '<td style="display:none">' + data.id + '</td>' +
    '<td contenteditable="true" class="text-center">' + data.total_calories + '</td>' +
    '<td class="text-center">' + 500 + '</td>' +
    '<td class="text-center">' + 300 + '</td>' +
    '</tr>'
  )
}
