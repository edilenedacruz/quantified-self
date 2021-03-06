function getFoods() {
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

function deleteFood(data) {
  // console.log(data)
  debugger;
}


function createFood(){
  var foodName = $('#food-name')[0].value;
  var foodCalories = $('#food-calories')[0].value;
  var newDate = new Date();
  var foodDate = `${newDate.getFullYear()}-${newDate.getMonth()+1}-${newDate.getDate()} ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}.${newDate.getMilliseconds()}`

  let foodParams = {name: foodName, calories: foodCalories, created_at: foodDate};

  $.ajax({
    url: "https://be-quantified-self.herokuapp.com/api/v1/foods",
    type: 'post',
    data: foodParams,
  }).then(lookAtData)
    .catch(function(error){
    console.error(error)
  })

}

function lookAtData(data){
  console.log(data)
}



$(document).ready(function(){
  if(window.location.pathname.substr(-10, 5) == "foods") {
    getFoods()
  };

  // $('#add-food').on('submit', function(){
  //
  //   if($('#food-name')[0].value == ""){
  //     $('#name-warning').append(`<p>fuck off</p>`)
  //   }else if($('#food-calories')[0].value == ""){
  //     createFood
  //   }else{
  //     createFood
  //   }
  //
  // });
    //  $('td').on('click', function () {
    //    debugger;
    //    debugger;
    //     //  var currentTD = $(this).parents('tr').find('td');
    //     //  if ($(this).html() == 'Edit') {
    //     //      $.each(currentTD, function () {
    //     //          $(this).prop('contenteditable', true)
    //     //      });
    //     //  } else {
    //     //     $.each(currentTD, function () {
    //     //          $(this).prop('contenteditable', false)
    //     //      });
    //     //  }
    //      //
    //     //  $(this).html($(this).html() == 'Edit' ? 'Save' : 'Edit')
     //
    //  });



  $('#remove-stuff').on('click','#remove-stuff', function(){
    deleteFood($(this).closest("tr"));
    $(this).closest("tr").innerHTML = ""
    debugger;
  })

})
