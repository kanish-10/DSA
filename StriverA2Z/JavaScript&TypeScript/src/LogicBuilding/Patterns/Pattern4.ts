// Pattern

//      1
//      2 2
//      3 3 3
//      4 4 4 4
//      5 5 5 5 5

let str4: string = "";

function pattern4(rows: number) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
      str4 += `${i + 1} `;
    }
    str4 += "\n";
  }
  console.log(str4);
}

pattern4(5);
