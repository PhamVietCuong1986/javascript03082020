// khai báo biến var, const
// mutale co the thay doi duoc kieu du lieu bien
//var a = "Nguyen Van A"
//a = 10
// khai bao bien imutale khog thay doi duoc kieu du lieu bien

///const b = "nguyen van b"

//console.log(b)

//2. kieu du lieu
// null
//var a = null
//console.log(a)
// undefined
//var a = []
//console.log(typeof a)
// khai bao object
// var teo = {
//  name : "Nguyen Van Teo",
//  age : 20

// }
//console.log(teo.name , teo.age)
// khai bao Array
// var arrayNames = ["teo","ti","hao","hai"]
// console.log(arrayNames[0])
// console.log(teo['name'] , teo['age'])
// cac phep tinh Arithmetic Operators
// toan tu va bieu thuc
 // viet a+1 a++, ++a, a = a+1, a +=1
//  var a = 5
//   var b = 6
//  var c = ++a - --b + b++ - --b + ++a - ++a - ++b + a++
//  // c = 6 - --b + b++ - --b + ++a - ++a - ++b + a++ (a=6, b=6)
//  // c = 6 - 5 + b++ - --b + ++a - ++a - ++b + a++ (a=6, b=5)
//  // c = 6 - 5 + 5 - --b + ++a - ++a - ++b + a++ (a=6, b=6)
//  // c = 6 - 5 + 5 - 5 + ++a - ++a - ++b + a++ (a=6, b=5)
// // c = 6 - 5 + 5 - 5 + 7- ++a - ++b + a++ (a=7, b=5)
// // c = 6 - 5 + 5 - 5 + 7- 8 - ++b + a++ (a=8, b=5)
// // c = 6 - 5 + 5 - 5 + 7- 8 - 6 + a++ (a=8, b=6)
// // c = 6 - 5 + 5 - 5 + 7- 8 - 6 + 8 (a=9, b=6)
// // c = 6-5+7-6=2
// console.log(c)
//6. function
// function showName(name){
//     console.log(name)
// }
// showName("Pham Viet Cuong")

// //7. object method
// var teo = {
//  name : "Nguyen Van Teo",
//  age : 20,
//  showName : function() {
//     console.log(this.name)
     
//  }
// }
// teo.showName()
// 8. compare
// var a = 5
// var b = "5"
// console.log(a === b)
