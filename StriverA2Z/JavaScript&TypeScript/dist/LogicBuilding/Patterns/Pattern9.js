// Pattern
//               *
//             * * *
//           * * * * *
//         * * * * * * *
//       * * * * * * * * *
//       * * * * * * * * *
//         * * * * * * *
//           * * * * *
//             * * *
//               *
let str9 = "";
function pattern9(rows) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows - i - 1; j++) {
            str9 += "  ";
        }
        for (let j = 0; j < 2 * i + 1; j++) {
            str9 += "* ";
        }
        for (let j = 0; j < rows - i - 1; j++) {
            str9 += "  ";
        }
        str9 += '\n';
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < i; j++) {
            str9 += "  ";
        }
        for (let j = 0; j < 2 * rows - (2 * i + 1); j++) {
            str9 += "* ";
        }
        for (let j = 0; j < i; j++) {
            str9 += "  ";
        }
        str9 += '\n';
    }
    console.log(str9);
}
pattern9(5);
