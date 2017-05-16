



function createMealDiaryItem(mealID){
  var checkedRows = $('input:checked').closest('tr')

  for(i = 0; i<checkedRows.length; i++){
    var foodID = $('input:checked').closest('tr')[i].children[3].innerHTML

    mealDiaryParams = {
      foodID: foodID,
      diaryID: 1,
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
  clearMealTables()
  populateMealTablesOne(1)
  populateMealTablesTwo(1)
  populateMealTablesThree(1)
  populateMealTablesFour(1)
}
