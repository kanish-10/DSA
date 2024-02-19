// Pattern

//      *                 *
//      * *             * *
//      * * *         * * *
//      * * * *     * * * *
//      * * * * * * * * * *
//      * * * *     * * * *
//      * * *         * * *
//      * *             * *
//      *                 *

let str20: string = '';

function pattern20(rows: number): void {
    let initialSpace = 2 * rows - 2;
    for (let i = 1; i <= 2 * rows - 1; i++) {
        let stars: number;
        i > rows ? stars = 2 * rows - i : stars = i;
        for (let j = 1; j <= stars; j++) {
            str20 += "* ";
        }
        for (let j = 1; j <= initialSpace; j++) {
            str20 += "  ";
        }
        for (let j = 1; j <= stars; j++) {
            str20 += "* ";
        }
        i < rows ? initialSpace -= 2 : initialSpace += 2;
        str20 += '\n';
    }
    console.log(str20);
}

pattern20(5);