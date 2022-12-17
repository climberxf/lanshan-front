function red() {
    console.log("red");
  }
  function green() {
    console.log("green");
  }
  function yellow() {
    console.log("yellow");
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