function createMealDiaryItem(mealID){
  var checkedRows = $('input:checked').closest('tr')
  for(i=0;i<checkedRows.length;i++){
    mealDiaryParams = {
      foodID: $('input:checked').closest('tr')[i].children[3].innerHTML,
      diaryID: $("#date-data-id")[0].innerHTML,
      mealID: mealID
    }
    postToMealDiaries(mealDiaryParams);
  }

  setTimeout(repopulateTables, 1000)

}

function postToMealDiaries(params){
  $.ajax({
    url: `http://localhost:3000/api/v1/meal_diaries`,
    type: 'POST',
    data: mealDiaryParams,
  }).then()
    .catch(function(error){
    console.error(error)
  })
}

function clearMealTables(){
  var mealsTables = $('.meal-data')
  for(i=0;i<mealsTables.length;i++){
    mealsTables[i].innerHTML = ""
  }
  var caloriesTables = $('.cal-data')
  for(i=0;i<caloriesTables.length;i++){
    caloriesTables[i].innerHTML = ""
  }

  var remainingValuesCalories = $('.remaining-calories')
  for(i=0;i<remainingValuesCalories.length;i++){
    remainingValuesCalories[i].innerHTML = ""
  }

}


function clearRemainingCaloriesOnReload(){
  // var remainingCaloriesCells = $('.remaining-calories')
  //
  // for(i=2;i<6;i++){
  //   remainingCaloriesCells[i].innerHTML="0"
  // }
  $('#table-one-remaining')[0].innerHTML = ("0")
  $('#table-two-remaining')[0].innerHTML = ("0")
  $('#table-three-remaining')[0].innerHTML = ("0")
  $('#table-four-remaining')[0].innerHTML = ("0")
}

function repopulateTables(){
  $('input:checked').prop('checked', false)
  var diaryID = $("#date-data-id")[0].innerHTML
  clearMealTables()
  clearRemainingCaloriesOnReload()
  resetCalculationVariables()
  populateMealTablesOne(diaryID)
  populateMealTablesTwo(diaryID)
  populateMealTablesThree(diaryID)
  populateMealTablesFour(diaryID)
}
