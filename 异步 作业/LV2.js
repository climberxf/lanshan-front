let red_box=document.getElementsByClassName("red")[0];
let green_box=document.getElementsByClassName("green")[0];
let yellow_box=document.getElementsByClassName("yellow")[0];

function red() {
    red_box.style.backgroundColor='red';
    setTimeout(() => {
        red_box.style.backgroundColor='rgb(51, 50, 50)'
    }, 2000);
  }
  function green() {
    green_box.style.backgroundColor='green';
    setTimeout(() => {
        green_box.style.backgroundColor='rgb(51, 50, 50)'
    }, 1000);
  }
  function yellow() {
    yellow_box.style.backgroundColor='yellow';
    setTimeout(() => {
        yellow_box.style.backgroundColor='rgb(51, 50, 50)'
    }, 3000);
  }
const color = function (time, color1) {
    return new Promise(resolve => {
      setTimeout(() => {
        color1()
        resolve()
      }, time)
    })
  }
  function color_print() {
    Promise.resolve().then(() => {
      return color(3000, red)
    }).then(() => {
      return color(2000, green)
    }).then(() => {
      return color(1000, yellow)
    }).then(() => {
      return color_print()
    })
  }
   
  color_print();