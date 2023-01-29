var row = 6
var column = 5
var display = ""

function test(){ //generate rectangle to visualize map
  for (let i = 0; i < column; i++){
    for (let i = 0; i < row; i++){
      display = display.concat("#")
    }
    display = display.concat("\n")
  }
  console.log(display)
}

function stringmode(strinput){
  let strlist = strinput.split("");
  strlist = strlist.filter(item => item !== '\n');
  display = strlist.join('');
  console.log(display);
}

function backtogridmode(strinput){
  let strlist = strinput.split("");
  for(let i = 0; i < strinput.length; i += row+1){
  strlist.splice(i, 0, "\n");
}
  display = strlist.join('');
  console.log(display);
}

test()
stringmode(display)
backtogridmode(display)
