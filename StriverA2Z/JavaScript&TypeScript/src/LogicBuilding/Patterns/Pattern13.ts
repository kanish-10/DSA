// Pattern

//       1
//       2 3
//       4 5 6
//       7 8 9 10
//       11 12 13 14 15

let str13: string = '';

function pattern13(rows: number) {
    let num: number = 1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= i; j++) {
            str13 += `${num} `;
            num += 1;
        }
        str13 += '\n';
    }
    console.log(str13);
}

pattern13(5);