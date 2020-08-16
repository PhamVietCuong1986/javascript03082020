// Ham REDUCE Gop phan tu
// arr.reduce(callback[, initialValue])
//  const arrayNums = [1,2,3,4,5,6,7,8,9,10];// yeu cau su dung ham REDUCE tinh tong cac phan tu cua mang
//  const total = arrayNums.reduce(function(tichLuy , currentValue){
//  console.log(tichLuy);// total la tham so tich luy
//  return tichLuy + currentValue;// tham so tichLuy ~~ voi total trong video
//  },0)// 0 la gia tri tich luy ban dau cua total nen se co gia tri la 0
// do mang co 10 phan tu nen se ung 10 vong lap vaf in ra tuong ung 10 ket qua tich luy total

// vi du 
// Trả về số lượng người đã vote
// function totalVotes(arr) {
//     var total =  arr.reduce(function(acc,voter){
//      return acc + voter.voted
// },0)
// console.log(total);
// }

// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];
// totalVotes(voters) // 7// gan tham so arr =voters
// vi du 2
// (param1, param2, …, paramN) => { statements }
// (param1, param2, …, paramN) => expression
// // tương đương với: (param1, param2, …, paramN) => { return expression; }

// // Dấu ngoặc đơn không bắt buộc khi chỉ có một tham số truyền vào:
// (singleParam) => { statements }
// singleParam => { statements }

// // Hàm khi không có tham số truyền vào bắt buộc phải là dấu ():
// () => { statements }
// () => expression // tương đương: () => { return expression; }

// [a:3 , b:2,c:1]
// function countOccurrences(arr){
// return arr.reduce((total, cur) => {
//     if(total[cur]) {
//         total[cur] += 1
//     } else{
//         total[cur] = 1
//     } return total
// },{});
// }
// console.log(countOccurrences(["a", "b", "c", "b", "a", "a"]));


// Ham SORT

// const arrnumbers = [15,5,6,8,9,7,11];
// arrnumbers.sort(function(a , b){
// // return b - a
// return a - b
// })
// console.log(arrnumbers);


//15. declaration class// Lop doi tuong
// tap the doi tuong co thuoc tinh vaf hanh vi ging nhau
// function constructor de dinh nghia class
// function Person(name , age){
//     this.name = name; // this dai dien lop Person
//     this.age = age;
//     this.Printname = function(){
//         console.log(name);
//     }
// }
// Person.prototype.address = null;
// Person.prototype.printAge = function(){
//     return this.age;
// };

// // vi du
// const teo = new Person("nguyen van teo" , 20)// new tuong trung cho viec khoi tao chi su dung cho constructor//class
// teo.address = "quan 10"
// console.log(teo.printAge())


// them thuoc tinh cho class ta dung tu khoa PROTOTYPE
// PROTOTYPE cac thuoc tinh dung chung

// 16. CLASS

class Person {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    showname(){
        console.log(name);
    }
}
 const teo = new Person("nguyen nam teo" , 20);
 console.log(teo);
 

