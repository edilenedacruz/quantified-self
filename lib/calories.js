// $(document).ready(function(){
//   calculateConsumed();
//
// })
//
//   function calculateConsumed() {
//     debugger;
//   }

function setGoalCalories(row, e){
    if (e){
      if (e.keyCode == 13){
        updateTotal(row)
      }
    }else{
      updateTotal(row)
    }
}

function updateTotal(row){
  // debugger
  let diaryParams = {id: parseInt(row.closest('tr').children[0].innerHTML), total_calories: parseInt(row.closest('tr').children[1].innerHTML)}
  $.ajax({
    url: `http://localhost:3000/api/v1/diaries/${row.closest('tr').children[0].innerHTML}`,
    method: 'PATCH',
    data: diaryParams,
  }).then(location.reload())
    .catch(function(error){
      console.log(error)
  })
}
