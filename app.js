
$(document).ready(function() {
  console.log("Inside");
  var counter = 0;


  $("#add").click(function(){
    if(counter >= 5){
          alert("Only 5 boxes allowed");
          return false;
        }
    else{
      ++counter;
      var ele = $(document.createElement('div')).attr("id", 'box' + counter).attr("class", 'box').html("Added row "+ counter);
      ele.appendTo("#main");
    }
    console.log(counter);
  });

  $("#del").click(function(){
    if(counter <= 0){
          alert("No more boxes to delete");
          return false;
        }
    else{
      var eleId = "#box" + counter;
      console.log(eleId);
      $(eleId).remove();
      counter--;
    }
  });

});
