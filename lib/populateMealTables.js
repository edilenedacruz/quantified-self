//
//
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


function appendMealTablesOne (data){
  for(i = 0; i<data.length; i++){
  $('#meal-table-one').append(
    `<tr class="meal-data"><td class="text-center">${data[i].food}</td><td class="text-center">${data[i].calories}</td><td class="text-center"><button type="button" class="btn btn-default btn-small" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>`
  )
}
}
function appendMealTablesTwo (data){
  for(i = 0; i<data.length; i++){
  $('#meal-table-two').append(
    `<tr class="meal-data"><td class="text-center">${data[i].food}</td><td class="text-center">${data[i].calories}</td><td class="text-center"><button type="button" class="btn btn-default btn-small" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>`
  )
}
}
function appendMealTablesThree (data){
  for(i = 0; i<data.length; i++){
  $('#meal-table-three').append(
    `<tr class="meal-data"><td class="text-center">${data[i].food}</td><td class="text-center">${data[i].calories}</td><td class="text-center"><button type="button" class="btn btn-default btn-small" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>`
  )
}
}
function appendMealTablesFour (data){
  for(i = 0; i<data.length; i++){
  $('#meal-table-four').append(
    `<tr class="meal-data"><td class="text-center">${data[i].food}</td><td class="text-center">${data[i].calories}</td><td class="text-center"><button type="button" class="btn btn-default btn-small" aria-label="Left Align"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button></td>`
  )
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
