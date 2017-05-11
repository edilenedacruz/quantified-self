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
  for(i = 0; i<data.length; i++){
    $('#foods-table').append(
      '<tr>'+
      '<td class="text-center">' + data[i].name + '</td>' +
      '<td class="text-center">' + data[i].calories + '</td>' +
      '<td class="text-center">'+ '<button type="button" class="btn btn-default btn-small" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true">' + '</span></button></td>' +
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
  }).then(lookAtData)
    .catch(function(error){
    console.error(error)
  })
  // $.post("http://localhost:3000/api/v1/foods", {post: {food_params}}, function(abalone){ console.log(abalone)}, "json" )
}

function lookAtData(data){
  console.log(data)
}

$(document).ready(function(){
  if(window.location.pathname.substr(-10, 5) == "foods") {
    getFoods()
  };
  $('#add-food').on('submit', createFood);
})
