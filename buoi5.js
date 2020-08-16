// advance JS

// 18.KHOI TAO BIEN - KHAI BAO BIEN
// VAR, CONST, LET

// var a = 10;
// var a = 1; // thuc chat no chi nhan gia tri khoi tao bien a cuoi cung
// var a = 25;// chi khac nhau ve dung nho
// console.log(a);
// gay khong biet dc bien thuoc global scope hay local scope
//  let a = 10;// global scope
//  function smt(){
//      let a = 5;// local scope
//      console.log(a);
//  }
//  smt() //() thuc thi ham - chay ham

 // HOISTING (KHOI TAO)
 /* 1 – Hoisting
•	Trình biên dịch của Javascript sẽ chuyển phần khai báo của biến và hàm lên trên top, nó được gọi là Hoisting
•	Chỉ có phần khai báo được đưa lên top, không phải phần gán giá trị
•	Phần khai báo hàm được đưa lên trước phần khai báo của biến
*/
// SCOPE (PHAM VI) {} Tao local 
// bien toan cuc khong nam trong {} nao ca
//

if(true){
    var a = 5 // khong tuan thu pham vi scope
    console.log(a)//5
}
console.log(a)//5 day chinh su nguy hiem cua khai bien dung VAR vi no hieu duoc ngoai pham vi scope {}

for(var index = 0; index < 10; index++){
    console.log(index + " trong for");
}
console.log(index);
