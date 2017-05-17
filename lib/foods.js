function getFoods() {
  $.ajax({
    url: "http://localhost:3000/api/v1/foods",
    method: 'GET'
  })
  .then(populateData)
  .catch(function(error){
    console.error(error)
  })
}

function populateData(data){
  var reverse_data = data.reverse();
  for(i = 0; i<reverse_data.length; i++){
    $('#foods-table').append(
      '<tr>'+
      '<td contenteditable="true" onblur = "rowEditVerification(this)" class="text-center" onkeypress="return rowEditVerification(this, event)" id="name">' + data[i].name + '</td>' +
      '<td  contenteditable="true" onblur = "rowEditVerification(this)" class="text-center" onkeypress="return rowEditVerification(this, event)" id="calories">' + data[i].calories + '</td>' +
      '<td style="display:none">' + data[i].id + '</td>' +
      '<td style="display:none">' + data[i].created_at + '</td>' +
      '<td class="text-center">'+ '<button onClick="deleteFood(this)"" id="remove-stuff" type="submit">Delete</button></td>' +
      '</tr>'
    )
  }
}

function createFood(){
  var foodName = $('#food-name')[0].value;
  var foodCalories = $('#food-calories')[0].value;
  var newDate = new Date();
  var foodDate = `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}.${newDate.getMilliseconds()}`

  let foodParams = {name: foodName, calories: foodCalories, created_at: foodDate};

  $.ajax({
    url: "http://localhost:3000/api/v1/foods",
    type: 'post',
    data: foodParams,
  }).then()
    .catch(function(error){
    console.error(error)
  })
}

$(document).ready(function(){
  if(window.location.pathname.substr(-10, 5) == "foods") {
    getFoods()
  };

  $('#remove-stuff').on('click','#remove-stuff', function(){
    deleteFood($(this).closest("tr"));
    $(this).closest("tr").innerHTML = ""
  })
})
