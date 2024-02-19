// Pattern
//       1
//       0 1
//       1 0 1
//       0 1 0 1
//       1 0 1 0 1
let str11 = "";
function pattern11(rows) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= i; j++) {
            (i + j) % 2 === 0 ? str11 += "1 " : str11 += "0 ";
        }
        str11 += "\n";
    }
    console.log(str11);
}
pattern11(5);
