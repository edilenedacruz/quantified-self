



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
  setTimeout(repopulateTables, 500)

}

function postToMealDiaries(params){
  $.ajax({
    url: `http://be-quantified-self.herokuapp.com/api/v1/meal_diaries`,
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

}

function repopulateTables(){
  $('input:checked').prop('checked', false)
  var diaryID = $("#date-data-id")[0].innerHTML
  clearMealTables()
  populateMealTablesOne(diaryID)
  populateMealTablesTwo(diaryID)
  populateMealTablesThree(diaryID)
  populateMealTablesFour(diaryID)
}
