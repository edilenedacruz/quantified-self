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
  let diaryParams = {id: parseInt(row.closest('tr').children[0].innerHTML), total_calories: parseInt(row.closest('tr').children[1].innerHTML)}
  $.ajax({
    url: `https://be-quantified-self.herokuapp.com/api/v1/diaries/${row.closest('tr').children[0].innerHTML}`,
    method: 'PATCH',
    data: diaryParams,
  }).then(location.reload())
    .catch(function(error){
      console.log(error)
  })
}
