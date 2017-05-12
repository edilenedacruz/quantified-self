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
function deleteFood() {
  debugger;

}

function populateData(data){
  // debugger;
  for(i = 0; i<data.length; i++){
    $('#foods-table').append(
      '<tr>'+
      '<td class="text-center">' + data[i].name + '</td>' +
      '<td class="text-center">' + data[i].calories + '</td>' +
      '<td class="text-center">'+ '<form id="remove-food"><button id = "remove-stuff" type="submit">Click Me!</button></form></td>' +
      '</tr>'
    )
  }
}

function deleteFood() {
  debugger;

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

// $('#remove-food').onClick = console.log('hi')

$(document).ready(function(){
  if(window.location.pathname.substr(-10, 5) == "foods") {
    getFoods()
  };
  $('#add-food').on('submit', createFood);
  $('#remove-food').on('submit', function(){console.log('hi')});
  // $('.remove-food').on('click', deleteFood);
  // $('#remove-food').on('click', function(){console.log('hi')});
  // $('.remove-food').on('click', deleteFood);
})

// $('#remove-food').on('click', deleteFood);
$('document').ready(function(){
  $('#remove-food').on('click', '#remove-stuff', function(){console.log('hi')
  })
})
