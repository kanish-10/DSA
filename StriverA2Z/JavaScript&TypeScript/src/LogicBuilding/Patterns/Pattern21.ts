// Pattern

//       * * * *
//       *     *
//       *     *
//       * * * *

let str21: string = '';

function pattern21(rows: number): void {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            i === 0 || j === 0 || i === rows - 1 || j === rows - 1 ? str21 += "* " : str21 += "  ";
        }
        str21 += '\n';
    }
    console.log(str21)
}

pattern21(4);