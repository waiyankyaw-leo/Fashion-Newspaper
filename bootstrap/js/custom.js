(function ($){
  $.fn.counter = function() {
    const $this = $(this),
    numberFrom = parseInt($this.attr('data-from')),
    numberTo = parseInt($this.attr('data-to')),
    delta = numberTo - numberFrom,
    deltaPositive = delta > 0 ? 1 : 0,
    time = parseInt($this.attr('data-time')),
    changeTime = 10;
    
    let currentNumber = numberFrom,
    value = delta*changeTime/time;
    var interval1;
    const changeNumber = () => {
      currentNumber += value;
      //checks if currentNumber reached numberTo
      (deltaPositive && currentNumber >= numberTo) || (!deltaPositive &&currentNumber<= numberTo) ? currentNumber=numberTo : currentNumber;
      this.text(parseInt(currentNumber));
      currentNumber == numberTo ? clearInterval(interval1) : currentNumber;  
    }

    interval1 = setInterval(changeNumber,changeTime);
  }
}(jQuery));

$(document).ready(function(){

  $('.count-up').counter();
  $('.count1').counter();
  $('.count2').counter();
  $('.count3').counter();
  $('.count4').counter();
  
  new WOW().init();
  
  setTimeout(function () {
    $('.count5').counter();
  }, 3000);
});


var $test = document.getElementById('test').innerHTML, $html = '', $i;

for ($i = 0; $i < $test.length; $i++) {
  $html += '<span style="animation: foo ' + $i + 's">' + ($test[$i]) + '</span>';
}
document.getElementById('test').innerHTML = $html;

var $test = document.getElementById('test1').innerHTML, $html = '', $i;

for ($i = 0; $i < $test.length; $i++) {
  $html += '<span style="animation: foo ' + $i + 's">' + ($test[$i]) + '</span>';
}
document.getElementById('test1').innerHTML = $html;

var $test = document.getElementById('test2').innerHTML, $html = '', $i;

for ($i = 0; $i < $test.length; $i++) {
  $html += '<span style="animation: foo ' + $i + 's">' + ($test[$i]) + '</span>';
}
document.getElementById('test2').innerHTML = $html;