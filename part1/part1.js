$(document).ready(function(){
  
  var theturn = 'x';
  
  $('td').on('click', function(){
    
    if(theturn=='x'){
      $(this).text("x");
      theturn = 'o';
    }
    else{
      $(this).text("o");
      theturn = 'x';
    }
  
  }); 
});