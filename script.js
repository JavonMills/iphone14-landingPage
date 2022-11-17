//this will load everything on the page before exceuting the jquiery/js
$(document).ready(function(){

    //this will highlight the image when the mouse is over it
    $("#image1").on("mouseover", function(){
        $(this).css("background-color", "grey");
    })
    $("#image1").on("mouseout", function(){
        $(this).css("background-color", "white");
    })
    
  
  });