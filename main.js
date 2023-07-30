"use strict";
function solveEquation(a, b, c) {

  let d = b ** 2 - 4 * a * c;
  let x1;
  let x2;
  let roots;
  console.log(d);
  if (d < 0) {
    roots=[];
  } else if (d == 0) {
    x1 = -b / (2 * a);
    roots=[x1]
  } else {
    x1 = (-b + Math.sqrt(d)) / (2 * a)
    x2 = (-b - Math.sqrt(d)) / (2 * a)
    roots = [x1,x2]
  }
   console.log(roots);
}

solveEquation(2, 2, -4);

