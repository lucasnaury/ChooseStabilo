$(document).ready(function () {
  var initialColors = [{name:"Light Pink",hex:"#ff8a8a"},
                      {name:"Light Blue",hex:"#80ceff"},
                      {name:"Light Green",hex:"#97ff91"}];
  var colors = [...initialColors];
  var wantToRestart = false;

  $(".main-content").click(function(){

    if(wantToRestart == false){ //If restart btn pressed, don't change color

      if(colors.length>0){ //If there are stabilo colors remaining
        var randomNum = Math.floor(Math.random() * colors.length); //Random index between 0 and colors.length
        var selectedColor = colors[randomNum]; //Pick a random color

        colors.splice(randomNum,1); //Remove selected color for next picks

        $(".main-content").css("background",selectedColor.hex); //set color
        $("#colorName").html(selectedColor.name); //Set color name
        $("#colorName").css("opacity",1); //Show color name
      }

      if(colors.length >0){
        $("#title").html("Choose again");
      }else{
          $("#title").html("Restart");
          colors = [...initialColors]; //Reset colors to initialColors
      }
    }else{
      wantToRestart = false;
    }


  });

  $('#restart').click(function(){
    wantToRestart = true; //Prevent the other click
    colors = [...initialColors]; //Reset colors to initialColors
    $("#title").html("Choose"); //Reset title
    $("#colorName").css("opacity",0); //Hide color name

  });


});
