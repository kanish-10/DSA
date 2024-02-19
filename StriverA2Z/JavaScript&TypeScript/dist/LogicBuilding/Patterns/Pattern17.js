// Pattern
//               A
//             A B A
//           A B C B A
//         A B C D C B A
//       A B C D E D C B A
let str17 = '';
let ch4 = ['A', 'B', 'C', 'D', 'E'];
function pattern17() {
    for (let i = 0; i < ch4.length; i++) {
        for (let j = 0; j < (ch4.length - i - 1); j++) {
            str17 += `  `;
        }
        let breakpoint = (2 * i + 1) / 2;
        let k = 0;
        for (let j = 1; j <= 2 * i + 1; j++) {
            str17 += `${ch4[k]} `;
            j > breakpoint ? k-- : k++;
        }
        for (let j = 0; j < (ch4.length - i - 1); j++) {
            str17 += `  `;
        }
        str17 += '\n';
    }
    console.log(str17);
}
pattern17();
