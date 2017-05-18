
//
var total = 0;

// function populateMealTables (diaryID){
//   var mealIdentification = [1,2,3,4]
//
//   for(i=0; i<mealIdentification.length; i++){
//     mealDiaryParams = {
//       diaryID:diaryID,
//       mealID:mealIdentification[i]
//     }
//
//      $.ajax({
//       url: `http://be-quantified-self.herokuapp.com/api/v1/meal_diaries`,
//       type: 'GET',
//       data: mealDiaryParams,
//     }).then(appendMealTables)
//       .catch(function(error){
//       console.error(error)
//     })
//
//     function appendMealTables(data){
//       console.log(data)
//       console.log(mealIdentification[i])
//     }
//   }
// }
function populateMealTablesOne (diaryID){
    mealDiaryParams = {
      diaryID:diaryID,
      mealID:1
    }

     $.ajax({
      url: `http://be-quantified-self.herokuapp.com/api/v1/meal_diaries`,
      type: 'GET',
      data: mealDiaryParams,
    }).then(appendMealTablesOne)
      .catch(function(error){
      console.error(error)
    })
}
function populateMealTablesTwo (diaryID){

    mealDiaryParams = {
      diaryID:diaryID,
      mealID:2
    }

     $.ajax({
      url: `http://be-quantified-self.herokuapp.com/api/v1/meal_diaries`,
      type: 'GET',
      data: mealDiaryParams,
    }).then(appendMealTablesTwo)
      .catch(function(error){
      console.error(error)
    })
}
function populateMealTablesThree (diaryID){

    mealDiaryParams = {
      diaryID:diaryID,
      mealID:3
    }

     $.ajax({
      url: `http://be-quantified-self.herokuapp.com/api/v1/meal_diaries`,
      type: 'GET',
      data: mealDiaryParams,
    }).then(appendMealTablesThree)
      .catch(function(error){
      console.error(error)
    })
}
function populateMealTablesFour (diaryID){

    mealDiaryParams = {
      diaryID:diaryID,
      mealID:4
    }

     $.ajax({
      url: `http://be-quantified-self.herokuapp.com/api/v1/meal_diaries`,
      type: 'GET',
      data: mealDiaryParams,
    }).then(appendMealTablesFour)
      .catch(function(error){
      console.error(error)
    })
}

function dateID(){
  return $("#date-data-id")[0].innerHTML
}


function appendMealTablesOne (data){
  for(i = 0; i<data.length; i++){
    calculateConsumed(data[i].calories)
  $('#meal-table-one').append(
    `<tr class="meal-data"><td id="diary-id" style="display:none"> ${dateID()}</td><td id="food-id" style="display:none"> ${data[i].id}</td><td id="meal-id" style="display:none"> 1</td><td class="text-center">${data[i].food}</td><td class="text-center">${data[i].calories}</td><td class="text-center"><button type="button" onClick="deleteMealTable(this)" class="btn btn-default btn-small" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>`
  )
}
}
function appendMealTablesTwo (data){
  for(i = 0; i<data.length; i++){
    calculateConsumed(data[i].calories)
    $('#meal-table-two').append(
      `<tr class="meal-data"><td id="diary-id" style="display:none"> ${dateID()}</td><td id="food-id" style="display:none"> ${data[i].id}</td><td id="meal-id" style="display:none"> 2</td><td class="text-center">${data[i].food}</td><td class="text-center">${data[i].calories}</td><td class="text-center"><button type="button" onClick="deleteMealTable(this)" class="btn btn-default btn-small" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>`
    )
}
}
function appendMealTablesThree (data){
  for(i = 0; i<data.length; i++){
    calculateConsumed(data[i].calories)
    $('#meal-table-three').append(
      `<tr class="meal-data"><td id="diary-id" style="display:none"> ${dateID()}</td><td id="food-id" style="display:none"> ${data[i].id}</td><td id="meal-id" style="display:none"> 3</td><td class="text-center">${data[i].food}</td><td class="text-center">${data[i].calories}</td><td class="text-center"><button type="button" onClick="deleteMealTable(this)" class="btn btn-default btn-small" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>`
    )
}
}
function appendMealTablesFour (data){
  for(i = 0; i<data.length; i++){
    calculateConsumed(data[i].calories)
  $('#meal-table-four').append(
      `<tr class="meal-data"><td id="diary-id" style="display:none"> ${dateID()}</td><td id="food-id" style="display:none"> ${data[i].id}</td><td id="meal-id" style="display:none"> 4</td><td class="text-center">${data[i].food}</td><td class="text-center">${data[i].calories}</td><td class="text-center"><button type="button" onClick="deleteMealTable(this)" class="btn btn-default btn-small" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>`
    )
}
}

function calculateConsumed(data){
  total += data
  $('#consumed').html(total)
  calculateRemaining(total);
}

function calculateRemaining(total){
  var consumedCal = total
  var goalCal = parseInt(document.getElementById("total-calories-row").innerHTML)
  var math = goalCal - consumedCal
    $('#remaining').html(math)

}

function deleteMealTable(data){
  var foodID =  data.closest('tr').children[1].innerHTML
  var diaryID = data.closest('tr').children[0].innerHTML
  var mealID =  data.closest('tr').children[2].innerHTML

  var mealDiaryParams = {id:foodID, diary_id:diaryID, meal_id:mealID  }

  $.ajax({
    url: "http://be-quantified-self.herokuapp.com/api/v1/meal_diaries",
    type: 'patch',
    data: mealDiaryParams,
  }).then(repopulateTables)
    .catch(function(error){
    console.error(error)
  })

}

$(document).ready(function(){
  // if(window.location.pathname.substr(-10, 5) == "index") {
  //   populateMealTablesOne(1)
  //   populateMealTablesTwo(1)
  //   populateMealTablesThree(1)
  //   populateMealTablesFour(1)
  // };

  $('body').on('click','#debug-button', function(){
debugger;
  })

})

// module.exports = {
//   populateMealTablesOne:populateMealTablesOne,
//     populateMealTablesTwo:populateMealTablesTwo,
//     populateMealTablesThree:populateMealTablesThree,
//     populateMealTablesFour:populateMealTablesFour
//
// }
