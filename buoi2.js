//9. vong lap for
// for (var i = 0 ; i < 10 ; i++){
//     console.log(i)
// }
//for of doi voi Array

// lay gia tri trong mang du lieu
// const arrayNumbers = [5,4,10,15,6]
// for(var value of arrayNumbers){
//     console.log(value)
// }
// for of khong su dung cho Object

// for in  doi voi Array 
// truyen key cua mang
// const arrayNumbers = [5,4,10,15,6]
// for (const key in arrayNumbers) {
//     console.log(key)
//}
// for in tim va lay gia tri object
const teo = {
    name : "nguyen van teo",
    age : 10
}
for (const key in teo) {
    console.log(key)
}
// interabal manng tim lay du lieu thong qua index
// object tim  va lay du lieu thong qua thuoc tinh cua bien
