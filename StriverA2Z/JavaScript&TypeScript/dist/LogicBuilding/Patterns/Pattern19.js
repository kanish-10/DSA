// Pattern
//      * * * * * * * * * *
//      * * * *     * * * *
//      * * *         * * *
//      * *             * *
//      *                 *
//      *                 *
//      * *             * *
//      * * *         * * *
//      * * * *     * * * *
//      * * * * * * * * * *
let str19 = '';
function pattern19(rows) {
    let initialSpace = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < rows - i; j++) {
            str19 += "* ";
        }
        for (let j = 0; j < initialSpace; j++) {
            str19 += "  ";
        }
        for (let j = 0; j < rows - i; j++) {
            str19 += "* ";
        }
        initialSpace += 2;
        str19 += '\n';
    }
    initialSpace = 2 * rows - 2;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j <= i; j++) {
            str19 += "* ";
        }
        for (let j = 0; j < initialSpace; j++) {
            str19 += "  ";
        }
        for (let j = 0; j <= i; j++) {
            str19 += "* ";
        }
        initialSpace -= 2;
        str19 += '\n';
    }
    console.log(str19);
}
pattern19(5);
