// Pattern
//      E
//      D E
//      C D E
//      B C D E
//      A B C D E
let str18 = '';
let ch5 = ['A', 'B', 'C', 'D', 'E'];
function pattern18() {
    for (let i = 0; i < ch5.length; i++) {
        for (let j = (ch5.length - 1) - i; j <= ch5.length - 1; j++) {
            str18 += `${ch5[j]} `;
        }
        str18 += '\n';
    }
    console.log(str18);
}
pattern18();
