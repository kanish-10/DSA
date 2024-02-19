// Pattern 1
//      * * * *
//      * * * *
//      * * * *
//      * * * *
let str1 = "";
function pattern1(rows) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows; j++) {
            str1 += "*";
        }
        str1 += "\n";
    }
    console.log(str1);
}
pattern1(5);
