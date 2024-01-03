let n = 10;

for (let i = 1; i <= n; i++) {

  for (let j = 1; j <= n - i; j++) {
    document.write("");
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    document.write("<span class='color'>*</span>");
  }
  document.write("<br/>");
}

let t = 5; 

for(let i = 0; i < t; i++) { 
  for(let j = 0; j < t; j++) { 
    document.write("*");
  }
  document.write("<br/>");
}