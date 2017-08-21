$(document).ready(function(){
    $('#btn').click(function(){
        var userInput = $('input[name=searchBox]').val(); //Store user input in search box to a variable called userInput
        console.log(userInput);
        });
        $('#dropdown1').addClass('dropdown-shift');
// Initialize collapse button
  $(".button-collapse").sideNav();
  $('.modal').modal();
  $(".dropdown-button").dropdown();
});
