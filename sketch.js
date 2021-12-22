var marks = [35, 38, 42, 45, 43, 34, 46, 41, 48, 32];
function searchNumber(a, x) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return i
    }

  }
  return -1

}


function setup() {
  createCanvas(400, 400);
var result = searchNumber(marks,41)

if (result == -1) {
  console.log("Number Not Found.")
} else {
  console.log("Number Found at Index: ", result)
}
}

function draw() {
  background(30);
}



