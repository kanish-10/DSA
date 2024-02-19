// Pattern
//      * * * * *
//      * * * *
//      * * *
//      * *
//      *
let str5 = "";
function pattern5(rows) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows - i; j++) {
            str5 += "* ";
        }
        str5 += "\n";
    }
    console.log(str5);
}
pattern5(5);
