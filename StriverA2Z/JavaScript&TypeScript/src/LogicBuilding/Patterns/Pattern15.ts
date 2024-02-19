// Pattern

//       A B C D E
//       A B C D
//       A B C
//       A B
//       A

let str15: string = '';
let ch2: string[] = ['A', 'B', 'C', 'D', 'E'];

function pattern15() {
    for (let i = ch2.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            str15 += `${ch2[j]} `;
        }
        str15 += '\n';
    }
    console.log(str15);
}

pattern15();