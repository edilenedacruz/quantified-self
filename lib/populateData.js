function getFoodsForIndex() {
  $.ajax({
    url: "https://be-quantified-self.herokuapp.com/api/v1/foods",
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
    $('#index-foods-table').append(
      '<tr>'+
      '<td class="text-center"><input type="checkbox"></td>' +
      '<td class="text-center" id="name">' + data[i].name + '</td>' +
      '<td class="text-center" id="calories">' + data[i].calories + '</td>' +
      '<td style="display:none">' + data[i].id + '</td>' +
      '<td style="display:none">' + data[i].created_at + '</td>' +
      '</tr>'
    )
  }
}

function filterByName() {
  var input, filter, table, tr, td, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("index-foods-table");
    tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
