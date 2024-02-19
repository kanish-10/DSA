// Pattern

//       A
//       B B
//       C C C
//       D D D D
//       E E E E E

let str16: string = '';
let ch3: string[] = ['A', 'B', 'C', 'D', 'E'];

function pattern16() {
    for (let i = 0; i < ch3.length; i++) {
        for (let j = 0; j <= i; j++) {
            str16 += `${ch3[i]} `;
        }
        str16 += '\n';
    }
    console.log(str16);
}

pattern16()