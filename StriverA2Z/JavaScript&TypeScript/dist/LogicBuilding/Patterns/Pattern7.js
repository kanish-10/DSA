// Pattern
//               *
//             * * *
//           * * * * *
//         * * * * * * *
//       * * * * * * * * *
let str7 = "";
function pattern7(rows) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows - i - 1; j++) {
            str7 += "  ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            str7 += "* ";
        }
        for (let j = 0; j < rows - i - 1; j++) {
            str7 += "  ";
        }
        str7 += '\n';
    }
    console.log(str7);
}
pattern7(5);
