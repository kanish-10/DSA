// Pattern
//      1 2 3 4 5
//      1 2 3 4
//      1 2 3
//      1 2
//      1
let str6 = "";
function pattern6(rows) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows - i; j++) {
            str6 += `${j + 1} `;
        }
        str6 += "\n";
    }
    console.log(str6);
}
pattern6(5);
