// Pattern

//       * * * * * * * * *
//         * * * * * * *
//           * * * * *
//             * * *
//               *

let str8: string = '';

function pattern8(rows: number) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < i; j++) {
            str8 += "  ";
        }
        for (let j = 0; j < 2 * rows - (2 * i + 1); j++) {
            str8 += "* ";
        }
        for (let j = 0; j < i; j++) {
            str8 += "  ";
        }
        str8 += '\n';
    }
    console.log(str8);
}

pattern8(5);
