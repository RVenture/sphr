window.onresize = function(event) {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }

  document.getElementById('fullscreen1').style.width = myWidth + "px";
  document.getElementById('fullscreen1').style.height = myHeight + "px";
  document.getElementById('fullscreen2').style.width = myWidth + "px";
  document.getElementById('fullscreen2').style.height = myHeight + "px";
  document.getElementById('fullscreen3').style.width = myWidth + "px";
  document.getElementById('fullscreen3').style.height = myHeight + "px";
  document.getElementById('overlay').style.width = myWidth + "px";
  document.getElementById('overlay').style.height = myHeight + "px";

};

window.onload = function(event) {
  var myWidth = 0, myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }

  document.getElementById('fullscreen1').style.width = myWidth + "px";
  document.getElementById('fullscreen1').style.height = myHeight + "px";
  document.getElementById('fullscreen2').style.width = myWidth + "px";
  document.getElementById('fullscreen2').style.height = myHeight + "px";
  document.getElementById('fullscreen3').style.width = myWidth + "px";
  document.getElementById('fullscreen3').style.height = myHeight + "px";
  document.getElementById('overlay').style.width = myWidth + "px";
  document.getElementById('overlay').style.height = myHeight + "px";

};

var wheelDelta; 
var didScroll; 
var current_page = 1;

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

var scrollIt = function(wheelDelta) {
  if (wheelDelta >= 0) {
      console.log('Scroll up');
      if (current_page != 1)
        current_page = current_page-1;
        $('body').animate({
      scrollTop: $("#fullscreen" + current_page).offset().top
    }, 1000);
        console.log("scroll to page: " + current_page);
    }
    else {
      console.log('Scroll down');
      if (current_page != 4)
        current_page = current_page+1;
        $('body').animate({
      scrollTop: $("#fullscreen" + current_page).offset().top
    }, 1000);
        console.log("scroll to page: " + current_page);
       
    }
}

var myFn = debounce(function(event) {
  // All the taxing stuff you do
  wheelDelta = event.originalEvent.wheelDelta;
  console.log("wheelDelta used: " + wheelDelta)
  scrollIt(wheelDelta);
  console.log("scrolling function")
  
}, 40, true);

var testWheelDelta = function (event) {
  heelDelta = event.originalEvent.wheelDelta;
  console.log("wheelDelta: " + wheelDelta)
}

$(window).bind('mousewheel', myFn);

$(window).bind('mousewheel', testWheelDelta);

var appy = document.getElementById('appy');
appy.addEventListener('click', myFunc);
function myFunc(eventObj) {
  
  console.log('clicked')

};


