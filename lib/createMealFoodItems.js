



function createMealDiaryItem(mealID){
  var checkedRows = $('input:checked').closest('tr')
  for(i = 0; i<checkedRows.length; i++){
  // var name = $('input:checked').closest('tr')[i].children[1].innerHTML
  // var calories = $('input:checked').closest('tr')[i].children[1].innerHTML
  var foodID = $('input:checked').closest('tr')[i].children[2].innerHTML

  mealDiaryParams = {
    foodID: foodID,
    diaryID: 1,
    mealID: mealID
  }

  $.ajax({
    url: `http://localhost:3000/api/v1/meal_diaries`,
    type: 'POST',
    data: mealDiaryParams,
  }).then(location.reload())
    .catch(function(error){
    console.error(error)
  })

  debugger;
}
}
