// let n = 5; 
// let m = 5; 
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += j;
//   }
//   string += "\n";
// }
// for (let i = 1; i <= m; i++) {
//     for (let j = 1; j <= i ; j++) {
//       string += j;
//     }
//     string += "\n";
//   }
// console.log(string);



let i,j,k;
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 6 - i; j++) {
        document.write("*");
    }
    for (k = 1; k < i; k++) {
        document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
    }
    for (j = 1; j <= 6 - i; j++) {
        document.write("*");
    }
    document.write("<br>");
}


// let m = 5; 
// let string1 = "";
// for (let i = 1; i <= m; i++) {
//   for (let j = 1; j <= m-1+i ; j++) {
//     string1 += j;
//   }
//   string1 += "\n";
// }
// console.log(string1);



// let a = 5; 
// let string2 = "";
// for (let i = 1; i <= a; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write(j)
// }
// document.write("<br>");   
// }