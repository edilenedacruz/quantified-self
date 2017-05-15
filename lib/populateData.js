function getFoodsForIndex() {
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
  debugger
  var reverse_data = data.reverse();
  for(i = 0; i<reverse_data.length; i++){
    $('#index-foods-table').append(
      '<tr>'+
      '<td class="text-center"><input type="checkbox"></td>' +
      '<td contenteditable="true" onblur = "rowEditVerification(this)" class="text-center" onkeypress="return rowEditVerification(this, event)" id="name">' + data[i].name + '</td>' +
      '<td  contenteditable="true" onblur = "rowEditVerification(this)" class="text-center" onkeypress="return rowEditVerification(this, event)" id="calories">' + data[i].calories + '</td>' +
      '<td style="display:none">' + data[i].id + '</td>' +
      '<td style="display:none">' + data[i].created_at + '</td>' +
      '</tr>'
    )
  }
}
