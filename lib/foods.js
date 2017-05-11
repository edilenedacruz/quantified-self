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


$(document).ready(function(){
  if(window.location.pathname.substr(-10, 5) == "foods") {
    getFoods()
  }
})
