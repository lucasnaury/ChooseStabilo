$(document).ready(function () {
  var initialColors = [{name:"Jaune Pastel",hex:"#fcdd72"},
                      {name:"Orange Pastel",hex:"#f68559"},
                      {name:"Rose Pastel",hex:"#f38fb5"},
                      {name:"Violet Pastel",hex:"#e7a5db"},
                      {name:"Cyan Pastel",hex:"#a5f1ef"},
                      {name:"Vert Pastel",hex:"#85e1af"},
                      {name:"Vert Foncé",hex:"#036d3f"},
                      {name:"Vert Clair",hex:"#30d565"},
                      {name:"Bleu",hex:"#01aef5"},
                      {name:"Violet",hex:"#551b9b"},
                      {name:"Rose Foncé",hex:"#f80d8e"},
                      {name:"Rose",hex:"#f7396f"},
                      {name:"Rose Orange",hex:"#f63f56"},
                      {name:"Rouge",hex:"#841a2b"},
                      {name:"Orange",hex:"#ed7947"},
                      {name:"Jaune",hex:"#eeff52"},
                      //NEW
                      {name:"Violet Mignon",hex:"#a26d9b"},
                      {name:"Bleu / Violet",hex:"#929bd4"},
                      {name:"Bleu clair",hex:"#7aa8e6"},
                      {name:"Gris",hex:"#9092a7"},
                      {name:"Vert Pomme",hex:"#bdd788"},
                      {name:"Abricot",hex:"#d9ad62"},
                      {name:"Encore un rose",hex:"#c45a77"},
                      {name:"Orangé",hex:"#dd7865"},
                      {name:"Or",hex:"#e8c567"},
                      {name:"Marron Paillette",hex:"#977c71"},
                      {name:"Argent",hex:"#72757c"},
                      {name:"Violet Paillette",hex:"#47263c"},

                    ];
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
        var rgb = hexToRgb(selectedColor.hex);
        if (rgb.r*0.299 + rgb.g*0.587 + rgb.b*0.114 > 175) { //If light color
          $("#colorName").css("color","#1b1b1b");
          $("#title").css("color","#1b1b1b");
          $("#restart").attr("src", "img/restart-black.svg");
        }else{
          $("#colorName").css("color","white");
          $("#title").css("color","white");
          $("#restart").attr("src", "img/restart-white.svg");
        }
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

  function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


});
