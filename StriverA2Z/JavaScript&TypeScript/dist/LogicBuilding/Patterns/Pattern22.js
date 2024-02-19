// Pattern
//      4 4 4 4 4 4 4
//      4 3 3 3 3 3 4
//      4 3 2 2 2 3 4
//      4 3 2 1 2 3 4
//      4 3 2 2 2 3 4
//      4 3 3 3 3 3 4
//      4 4 4 4 4 4 4
let str22 = '';
function pattern22(rows) {
    for (let i = 0; i < 2 * rows - 1; i++) {
        for (let j = 0; j < 2 * rows - 1; j++) {
            let top = i;
            let left = j;
            let right = (2 * rows - 2) - j;
            let bottom = (2 * rows - 2) - i;
            str22 += `${(rows - Math.min(Math.min(top, bottom), Math.min(left, right)))} `;
        }
        str22 += '\n';
    }
    console.log(str22);
}
pattern22(4);
