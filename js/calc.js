//add your code here
$(document).ready(function(){


  doMath();

});


const number1 = $('#number1')
const operator = $('#operation')
const number2 = $('#number2')


function doMath() {
  $('button').on('click', function(){
    console.log('hi')
    console.log(number1.val())
    console.log(operator.val())
    console.log(number2.val())
    numbers1 = Number.parseFloat(number1.val())
    numbers2 = Number.parseFloat(number1.val())
    // operationz = operator.val()
    validate(numbers1, operator.val(), numbers2)
  })
}




function validate(num1, operation, num2) {
  var validation = true
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    validation = false
    $("#result").text('Sorry, one of those is not a valid number!')
    return 'Sorry, one of those is not a valid number!'
  }
  
  if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
    validation = false
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator"
  }
  if (validation === true) {
    // console.log("i should run")
    result(num1, operation, num2)
  } 
}



