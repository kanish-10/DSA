// Pattern

//      1
//      1 2
//      1 2 3
//      1 2 3 4
//      1 2 3 4 5

let str3: string = "";

function pattern3(rows: number) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= i; j++) {
      str3 += `${j + 1} `;
    }
    str3 += "\n";
  }
  console.log(str3);
}

pattern3(5);
