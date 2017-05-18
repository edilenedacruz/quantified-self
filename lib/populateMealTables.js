
//
var total = 0;
var tableOneTotal = 0;
var tableTwoTotal = 0;
var tableThreeTotal = 0;
var tableFourTotal = 0;
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
//       url: `http://localhost:3000/api/v1/meal_diaries`,
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
      url: `http://localhost:3000/api/v1/meal_diaries`,
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
      url: `http://localhost:3000/api/v1/meal_diaries`,
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
      url: `http://localhost:3000/api/v1/meal_diaries`,
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
      url: `http://localhost:3000/api/v1/meal_diaries`,
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
    calculateTableOneTotal(data[i].calories)
  $('#meal-table-one').append(
    `<tr class="meal-data"><td id="diary-id" style="display:none"> ${dateID()}</td><td id="food-id" style="display:none"> ${data[i].id}</td><td id="meal-id" style="display:none"> 1</td><td class="text-center">${data[i].food}</td><td class="text-center">${data[i].calories}</td><td class="text-center"><button type="button" onClick="deleteMealTable(this)" class="btn btn-default btn-small" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td></tr>`
  )
  }
  setTimeout(appendCaloriesTableOne, 100)
}
function appendMealTablesTwo (data){
  for(i = 0; i<data.length; i++){
    calculateConsumed(data[i].calories)
    calculateTableTwoTotal(data[i].calories)
    $('#meal-table-two').append(
      `<tr class="meal-data"><td id="diary-id" style="display:none"> ${dateID()}</td><td id="food-id" style="display:none"> ${data[i].id}</td><td id="meal-id" style="display:none"> 2</td><td class="text-center">${data[i].food}</td><td class="text-center">${data[i].calories}</td><td class="text-center"><button type="button" onClick="deleteMealTable(this)" class="btn btn-default btn-small" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>`
    )
}
setTimeout(appendCaloriesTableTwo, 100)
}

function appendMealTablesThree (data){
  for(i = 0; i<data.length; i++){
    calculateConsumed(data[i].calories)
    calculateTableThreeTotal(data[i].calories)
    $('#meal-table-three').append(
      `<tr class="meal-data"><td id="diary-id" style="display:none"> ${dateID()}</td><td id="food-id" style="display:none"> ${data[i].id}</td><td id="meal-id" style="display:none"> 3</td><td class="text-center">${data[i].food}</td><td class="text-center">${data[i].calories}</td><td class="text-center"><button type="button" onClick="deleteMealTable(this)" class="btn btn-default btn-small" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>`
    )
}
setTimeout(appendCaloriesTableThree, 100)
}
function appendMealTablesFour (data){
  for(i = 0; i<data.length; i++){
    calculateConsumed(data[i].calories)
    calculateTableFourTotal(data[i].calories)
  $('#meal-table-four').append(
      `<tr class="meal-data"><td id="diary-id" style="display:none"> ${dateID()}</td><td id="food-id" style="display:none"> ${data[i].id}</td><td id="meal-id" style="display:none"> 4</td><td class="text-center">${data[i].food}</td><td class="text-center">${data[i].calories}</td><td class="text-center"><button type="button" onClick="deleteMealTable(this)" class="btn btn-default btn-small" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>`
    )
}
setTimeout(appendCaloriesTableFour, 100)
}

function calculateConsumed(data){
  total += data
  $('#consumed').html(total)
  calculateRemaining(total);
}

function calculateRemaining(total){
  var consumedCal = total
  var goalCal = 2000
  var math = goalCal - consumedCal
  if (math >= 0) {
    $('#remaining').html(math).css('color', 'green')
  } else {
    $('#remaining').html(math).css('color', 'red')
  }  
}

function deleteMealTable(data){
  var foodID =  data.closest('tr').children[1].innerHTML
  var diaryID = data.closest('tr').children[0].innerHTML
  var mealID =  data.closest('tr').children[2].innerHTML

  var mealDiaryParams = {id:foodID, diary_id:diaryID, meal_id:mealID  }

  $.ajax({
    url: "http://localhost:3000/api/v1/meal_diaries",
    type: 'patch',
    data: mealDiaryParams,
  }).then(repopulateTables)
    .catch(function(error){
    console.error(error)
  })

}

function calculateTableOneTotal(data){
  tableOneTotal += data
}

function appendCaloriesTableOne() {
  $('#meal-table-one').append(
  `<tr class="cal-data">
    <td class="text-center"><strong>Total Calories</strong></td>
    <td class="text-center" colspan="2"><strong>400</strong></td>
  </tr>
  <tr class="cal-data">
    <td class="text-center"><strong>Remaining Calories</td>
    <strong><td class="text-center" id="table-one-remaining" colspan="2"></td></strong>
  </tr>`
  )
  var calculateOne = 400 - tableOneTotal
    if (calculateOne >= 0) {
  $('#table-one-remaining').html(calculateOne).css('color', 'green')
} else {
  $('#table-one-remaining').html(calculateOne).css('color', 'red')
}
}

function calculateTableTwoTotal(data){
  tableTwoTotal += data
}

function appendCaloriesTableTwo() {
  $('#meal-table-two').append(
  `<tr class="cal-data">
    <td class="text-center"><strong>Total Calories</strong></td>
    <td class="text-center" colspan="2"><strong>600</strong></td>
  </tr>
  <tr class="cal-data">
    <td class="text-center"><strong>Remaining Calories</td>
    <strong><td class="text-center" id="table-two-remaining" colspan="2"></td></strong>
  </tr>`
  )
  var calculateTwo = 600 - tableTwoTotal
  if (calculateTwo >= 0) {
$('#table-two-remaining').html(calculateTwo).css('color', 'green')
} else {
$('#table-two-remaining').html(calculateTwo).css('color', 'red')
}
}

function calculateTableThreeTotal(data){
  tableThreeTotal += data
}

function appendCaloriesTableThree() {
  $('#meal-table-three').append(
  `<tr class="cal-data">
    <td class="text-center"><strong>Total Calories</strong></td>
    <td class="text-center" colspan="2"><strong>800</strong></td>
  </tr>
  <tr class="cal-data">
    <td class="text-center"><strong>Remaining Calories</td>
    <strong><td class="text-center" id="table-three-remaining" colspan="2"></td></strong>
  </tr>`
  )
  var calculateThree = 800 - tableThreeTotal
  if (calculateThree >= 0) {
$('#table-three-remaining').html(calculateThree).css('color', 'green')
} else {
$('#table-three-remaining').html(calculateThree).css('color', 'red')
}
}
function calculateTableFourTotal(data){
  tableFourTotal += data
}

function appendCaloriesTableFour() {
  $('#meal-table-four').append(
  `<tr class="cal-data">
    <td class="text-center"><strong>Total Calories</strong></td>
    <td class="text-center" colspan="2"><strong>800</strong></td>
  </tr>
  <tr class="cal-data">
    <td class="text-center"><strong>Remaining Calories</td>
    <strong><td class="text-center" id="table-four-remaining" colspan="2"></td></strong>
  </tr>`
  )
  var calculateFour = 800 - tableFourTotal
    if (calculateFour >= 0) {
      $('#table-four-remaining').html(calculateFour).css('color', 'green')
    } else {
      $('#table-four-remaining').html(calculateFour).css('color', 'red')
    }
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
