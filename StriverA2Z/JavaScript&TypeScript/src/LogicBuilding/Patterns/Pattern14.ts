// Pattern

//       A
//       A B
//       A B C
//       A B C D
//       A B C D E

let str14: string = "";
let ch1 = ['A','B','C','D','E']

function pattern14() {
    for (let i = 0; i < ch1.length; i++) {
        for (let j = 0; j <= i; j++) {
            str14 += `${ch1[j]} `;
        }
        str14 += "\n";
    }
    console.log(str14)
}

pattern14();