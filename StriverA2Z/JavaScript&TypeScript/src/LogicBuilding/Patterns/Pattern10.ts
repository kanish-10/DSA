// Pattern

//       *
//       * *
//       * * *
//       * * * *
//       * * * * *
//       * * * *
//       * * *
//       * *
//       *

let str10: string = "";

function pattern10(rows: number) {
    for (let i = 1; i <= 2 * rows - 1; i++) {
        let stars = i;
        if (i > rows) stars = 2 * rows - i;
        for (let j = 1; j <= stars; j++) str10 += "* ";
        str10 += '\n';
    }
    console.log(str10);
}

pattern10(5)