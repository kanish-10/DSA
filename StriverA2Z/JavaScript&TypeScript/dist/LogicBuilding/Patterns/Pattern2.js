// Pattern
//      *
//      * *
//      * * *
//      * * * *
//      * * * * *
let str2 = "";
function pattern2(rows) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= i; j++) {
            str2 += "* ";
        }
        str2 += "\n";
    }
    console.log(str2);
}
pattern2(5);
