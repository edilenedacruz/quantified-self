



function createMealDiaryItem(mealID){
  var checkedRows = $('input:checked').closest('tr')
debugger;
  for(i = 0; i<checkedRows.length; i++){
    var foodID = $('input:checked').closest('tr')[i].children[3].innerHTML
    var diaryID = $("#date-data-id")[0].innerHTML

    mealDiaryParams = {
      foodID: foodID,
      diaryID: diaryID,
      mealID: mealID
    }

    $.ajax({
      url: `http://localhost:3000/api/v1/meal_diaries`,
      type: 'POST',
      data: mealDiaryParams,
    }).then(repopulateTables())
      .catch(function(error){
      console.error(error)
    })
  }
}

function clearMealTables(){
  var mealsTables = $('.meal-data')
  for(i=0;i<mealsTables.length;i++){
    mealsTables[i].innerHTML = ""
  }

}

function repopulateTables(){
  var diaryID = $("#date-data-id")[0].innerHTML
  clearMealTables()
  populateMealTablesOne(diaryID)
  populateMealTablesTwo(diaryID)
  populateMealTablesThree(diaryID)
  populateMealTablesFour(diaryID)
}
