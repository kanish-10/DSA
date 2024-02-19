// Pattern
//       1             1
//       1 2         2 1
//       1 2 3     3 2 1
//       1 2 3 4 4 3 2 1
let str12 = '';
function pattern12(rows) {
    let space = 2 * (rows - 1);
    for (let i = 0; i < rows; i++) {
        for (let j = 1; j <= i; j++) {
            str12 += `${j} `;
        }
        for (let j = 0; j < space; j++) {
            str12 += "  ";
        }
        for (let j = i; j >= 1; j++) {
            str12 += `${j} `;
        }
        str12 += "\n";
        space -= 2;
    }
    console.log(str12);
}
pattern12(5);
