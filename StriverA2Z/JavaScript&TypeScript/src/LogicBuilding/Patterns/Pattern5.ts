// Pattern

//      * * * * *
//      * * * *
//      * * *
//      * *
//      *

let str5: string = "";

function pattern5(rows: number) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows - i; j++) {
      str5 += "* ";
    }
    str5 += "\n";
  }
  console.log(str5);
}

pattern5(5);
