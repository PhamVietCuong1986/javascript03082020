// SCOPE & CLOSURE 

// CHAPTER I. SCOPE
/* XAc dinh cac bien luu tru o dau trong chuong trinh
1. Doi voi ngon ngu truyen thong ma nguon se thong qua 3 buoc truoc khi thuc thi chuong trinh goi la bien dich
 - Tokenizing/lexing (the xac thuc) (var a = 2;)
 - Ghi chu: Tokenizer goi cac quy tac phan tich trang thai xem lieu a co duoc xem la mot token rieng biet 
 hay la mot phan cua TOKEN do chinh la LEXING
 - Phan tich cu phap (PARSING): Lay mot mang (array) TOKEN chuyen no thanh cac phan tu cay long nhau
 dai dien cho cu phap chuong trinh. cay AST (Abstract syntax tree)
- Cay cua (var a = 2;)
 + Nut cao nhat Variabledeclaration (gia tri a - value a)
 + Nut con Identifier
 + Nut con khac AssegmentExpression co 1 nut con
   ++  Numberial Literal (gia tri 2 - value 2)
- Xu ly ma CODE (CODE GENERATION)
la qua trinh lay cay AST bien no thanh ma thuc thi
Phan nay khac nhay rat nhieu tuy thuoc vao ngon ngu lap trinh va nen tang ma no nham den
*/
//JAVASCRIPT cung tuan thu 3 buoc tren
// Bat ky doan ma CODE nao cung duoc bien dich truoc khi no thuc thi

//. VAI TRO CAC VAI DIEN TRONG CHUONG TRINH JS
/* 2.1 Engine viet code
2.2 Compiler: Phan tich cu phap va xu ly ma
2.3 SCOPE Tap hop vaf duy tri cac dinh danh da khai bao (bien) thuc hien 
tap hop cac quy tac nghiem ngat ve cach thuc truy cap cac ma vua thuc thi
*/

// SCOPE long nhau

// CHAPTER2 scope _LEXICAL SCOPE
 /* dua tren bien va khoi pham vi do ban tao ra tai thoi diem viet CODE
 // Khong nen dung EVAL(), WITH() de thay doi pham vi cua bien trong scope, no lam code chay cham

 
/* CHAPTER 3 _ SERIES 2: FUNCTION & BLOCK SCOPE


SCOPE tap hop bao gom cac "BONG BONG" ma moi scope hoat dong nhu vat chua trong do de xac dinh (ham, bien) 
Cac "BONG BONG" to hop (NESTING) gon gang ben trong cac "bong bong khac", to hop nay dc xac dinh tai thoi diem AUthor runtime*/

/*3.1 Pham vi cac ham
FUNCTION -BASED SCOPE
Moi function khai bao tao ra"Bong bong"
*/

// function doSomething (a){
//     b = a + doSomethingElse(a*2);
//     console.log(b * 3);
// }
// function doSomethingElse (a){
//     return a-1;
//  }
//  var b;
//  doSomething(2); //15

 // lap trinh toi uu hon
//  function doSomething (a){
//     function doSomethingElse(a){
   
//     return a-1;
//     }
//     var b;
//     b = a + doSomethingElse(a*2);// khong tiep can ben ngoai chuong trinh
//     console.log(b * 3);
//  }
//   doSomething(2); //15

// Tranh duoc su trung lap

// function foo(){
//     function bar(a){
//         i = 3;
//         for console.log(a + i);
//     }
//     for (var i = 0; i < 10; i++){
//          bar(i * 2);
//     }
// }
// foo();

// NAMESPACES - TOAN CUC

// var MyRealyCoolLibrary = {
//     awesome : "stuff",
//     doSomething : function () {
//         // 
//     },
//     doAnotherThing : function () {
//         //
//     }
// };

// QUAN LY MODULE
// Ham dong vai tro pham vi
 
// var a = 2;
// function foo() {
//     var a = 3;
//     console.log(a);//3
// }
// foo();
// console.log(a);//2

// khai bao ham foo() an voi chuong trinh
//  var a = 2;
//  (function foo() {
//      var a = 3;
//      console.log(a);
//   })();// cau truc nay an ham foo khong co y nghia doi chuong trinh ben ngoai
// console.log(a)

// VO DANH VA CAI TEN
// bieu thuc ham la tham chieu CALLBACK
//  setTimeout(function() {// ham khong ten hay an danh
//      console.log("I waited 1 second");
     
//  }, 1000);

//  /* Ham vo danh khong co ten truy dau, kho Debug loi
//  lam code kho doc hon. Mot cai ten chinh la document cua code */

//  // ham co ten "SetoutHander"
//  setTimeout(function setimeoutHander() {// ham khong ten hay an danh
//     console.log("I waited 1 second");
    
// }, 1000);

//  IMMEDIATELY INVOKED FUNCTION EXPRESSION  (IIFE)
// Goi bieu thuc ham tuc thi
// Dang thong thuong IIFE duoc su dung ham vo danh
// (function(){
//     var a = 2;
//     console.log(a);
// })();
// Bien tau khac cua IIFE
 
// var a = 2;
// (function IIFE(global){
//     var a = 3;
//     console.log(a);//3
//     console.log(global.a);//2
// })(window);
// console.log(a);//2
// // tham so "global", tham chieu "window"

// IIFE giai quyet hieu ung phu undefined

// undefined = true;
// (function IIFE(undefined){
//     var a ;
//     if (a === undefined){
//         console.log("undefined an toan o day");
//     }
// })();

// Bien the khac cua IIFE trong du an UDM (universal definition Module)

// BLOCK SCOPE

// for (var i = 0; i < 10; i++){// khai bao tai noi su dung no cang cuc bo cang tot. noi dung cua BLOCK SCOPE
//     console.log(i);
// };

// LET su dung khai bao bien trong BLOCK SCOPE {} thay chho var

// var foo = true;
// if (foo){
//     let bar = foo * 2;
//     bar = something(bar);
//     console.log(bar);//
// }
// console.log(bar); // referenc Error

// Khai bao Let chi co tac dung khi khai bao LET duoc thuc hien, khong phu toan cuc trong Block {}

// var a = 2;
// {
//     console.log(bar);// reference Error
//     let bar = 2;// cac bieu thuc chua bien sau khi khai bao LET oi dc hieu, truoc do bao loi
    
// }
// GOM RAC VA CLOSURE
// gom rac va dong kin de lay lai bo nho

// function process (data){
//     // lam gi do
// }
// var someRellyBigData = { };
// process(someRellyBigData);
// var btn = document.getElementById("my button");// thay "let" cho "var" khai bao bien cho khoi rieng biet
// btn.addEventListener("click" , function click(evt){
//     console.log("button clicked");
// }, false);

// Vong lap Let
//  for(let i = 0; i < 10; i++){
//      console.log(i);
//  }
// console.log(i);// reference Error

// CONST - KHAI BAO BIEN HANG SO 


// CHAPTER IV -SERIES 2 - HOISTING// trung co truoc ga
/* hOISTING la viec khai bao bien voi "var" duoc thuc hien tren cung cua bieu thuc thuc thi bien do"
Khai bao ham dau tien, sau do khai bao bien, tiep theo la bieu thuc thuc thi
*/
// var a;
// a  = 2;
// console.log(a);
// // hoac la
// var a;
// console.log(a);
// a  = 2;
// // hoac la
// var a = 2;
// console.log(a);

// khai bao ham theo chuan HOISTING
// Function foo(){
//     var a = 2;
//     console.log(a);
// }
// foo();

// HAM TRUOC

// function foo(){
//     console.log(1);
// }
// foo();
// foo = function(){
//     console.log(2);
// };
// var a = 2; day la 2 cau lenh cau lenh dau la bien dich var a; cau lenh hai thuc thi gan a = 2;


// CHAPTER 5 -SERIES 2 - SCOPE CLOSURE (BLOCK DONG KIN)


// LEXICAL SCOPE la khong gian bien duoc khia bao trong function()
 
// function wait(message){
//   setTimeout( function timer (){ // ham function timer la 1 closure
//     console.log(message), 1000
//   });
// }
// wait (" hello, closure");


// function setupBot (name, selector){
//   $(selector) .click (function activator(){
//     console.log("activating" + name);

//   });
// }
// setupBot("closure Bot1" , "#bot_1")//gan cho doi so gia tri name ="closure Bot1" , selector = "bot_1"
// setupBot("closure Bot2" , "#bot_2")//gan cho doi so gia tri name ="closure Bot2" , selector = "bot_2"

//IIFE co moi lien he mat thiet voi CLOSURE nhung khong phai la 1 CLOSURE

// VONG LAP + CLOSURE

// for (var i = 1; i <= 5, i++) {
//   setTimeout(function timer(){
//       console.log(i); 
//     },i * 1000);
//   }

// Linter la cong cu tim loi trong viet CODE dua ra huong dan trong qua trinh viet CODE
// Linter la cong cu dung de phan tich SOURCE CODE phat hien nhung loi sai, bug, vi pham loi sai khi viet CODE


// su dung IIFE

// for (var i = 1; i<=5; i++){
//   (function() {setTimeout( function timer(){
//     console.log(i);
//   }, i * 1000);

//   })();
// }// se chay nhung ket qua 6, khong chinh xac


// for (var i = 1; i<=5; i++){
//   (function() {
//     var j = i;
//     setTimeout( function timer(){
//     console.log(j);
//   }, j * 1000);

//   })();
// }
//hay viet theo kieu dang duoi day
// for (var i = 1 ; i <=5;i++){
//   (function(j){var j = i;
//     setTimeout(function timer(){
//       console.log(j);
//     }, j*1000)// closure dong kin bien j cua ham timer
//   })(i);
// }

// BLOCK SCOPING VOI VARIABLE LET

// Khai bao LET trong 1 block {let..} de chung ta co the dong block do
//  for (var i =1; i <= 5;i++){ //bat dau cho 1 block dong kin
//    let j = i; setTimeout(function timer(){}
//      console.log(j);
//    }, j*1000);//} ket thuc cho 1 block dong kin
//  }

//  for (let i = 1; i <=5;i++){
//    let j = i; setTimeout(function timer(){
//      console.log(j)
     
//    }, j *1000);
//  }
 // viet gon hon khi dung LET khai bao bien i khong can them bien J

//  for (let i = 1; i <= 5; i++){
//    setTimeout(function(){
//      console.log(i);
//    }, i *1000);
//  }
 // CALLBACK function trong JS la khi ham a duoc truyen vao trong ham b, ham a nhu la 1 tham so cua b
 // Ham a la CALLBACK, ham b goi HIGH ORDER


 //MODULE 
 // tao nhung mau closure dang CALLBACK FUNCTION

 //lexical scope la khong gian bien trong ham
 // block scope la khong gian bien trong block {}
//  function foo(){
//    var something = "cool";
//    var another = [1,2,3];
//    function doSomething(){
//      console.log(something);
//    }
//    function doAnother(){
//      console.log(another.join(" ! "));
//    }
//  }
//  foo();
 // doan code tren chua co observal closure
 
 // Mau MODULE PATTERN - MAU MODUN
 // vi du dien hinh cau truc module sau:

//  function coolModule(){// day dc goi la module mau coolModule
//   var something = "cool";
//   var another = [1,2,3];
//   function doSomething(){
//     console.log(something);
//   }
//   function doAnother(){
//     console.log(another.join(" ! "));
//   }
//   return{ doSomething: doSomething,
//           doAnother: doAnother};// dang OBJECT co key {key:..., key:...}

//  }
//  var foo = coolModule();// gan bien ben ngoai cho ham module
//  foo.doSomething();// cool
//  foo.doAnother();//[1,2,3]

// API (Application Programming Interface) Giao dien lap trinh ung dung

// Hai dac diem cua 1 mau MODULE
//1. No phai la ham bao ben ngoai
//2. Ham ben ngoai phai tra it nhat 1 gia tri ham ben trong

// Bien ham module mau thanh IIFE

// var foo = (function coolModule(){
//   var something = "cool";
//   var another = [1,2,3];
//   function doSomething(){
//     console.log(something);
//   };
//   function doAnother(){
//     console.log(another.join(" ! "));
//     }
//     return { doSomething: doSomething ,
//              doAnother: doAnother};
// })();
// foo.doSomething();
// foo.doAnother();

// truyen tham so vao

// function coolModule(id){
//   function Identifier(){
//     console.log(id + " i love JS");
//   }
//   return { Identifier: Identifier};
// }
// var foo1 =coolModule("foo 1");//gan gia tri cho tham so Id = "foo 1"
// var foo2 =coolModule("foo 2");//gan gia tri cho tham so Id = "foo 2"
// foo1.Identifier();//"foo 1 ILOVE jS"
// foo2.Identifier();// "foo 2 I LOVE jS"

// Mot bien the cua mau Module (module pattern) la dat ten OBJECT vaf ban tra lai nhu mot API cong khai

// var foo = (function coolModule(id){
//   function change(){ // sua doi cong khai API
//     publicAPI.identify = identify2;// thuoc tinh identify cua publicAPI la bang identify2
//   }
//   function identify1(){
//     console.log(id);// ham identify1 la cho hien thi tham so "id"
//   }
//   function identify2(){
//     console.log(id.toUpperCase());// ham identify2 cho hien thi thuoc tinh viet hoa tat ca cua "id"
//   }
//   var publicAPI = {// khai bao object publicAPI goom 2 thuoc tinh
//     change: change,
//     identify: identify1
//   };
//   return publicAPI;
// })(" i know ");// gan gia tri cho tham so id = " i know "
// foo.identify();// " i know"
// foo.change();
// foo.identify();// I KNOW
// foo.identify();
// foo.identify();

// MODULE HIEN DAI

// lap trinh sao cho khi goi, quan ly theo thu vien MODULE mot cach de dang, don gian

// doan code theo doi module theo ten

// var Mymodule = (function manager(){
//   var modules = {};
//   function define( name, deps, impl){
//     for (var i = 0; i <= deps.length; i++){
//       deps[i] = module(deps[i]);
//       modules name = impl.apply(impl, deps);
//       }
//       function get(name) = {
//         return modules[name];
//         }   
//   } return {
//     define: define,
//     get: get
//   }
// })();

// // function square(number) {
//   return number * number;
// }
// Hàm square nhận 1 tham số, có tên là number. 
// Hàm này bao gồm một câu lệnh mà nó sẽ trả về tham số (number) nhân với chính nó. 
// Câu lệnh return chỉ định giá trị được trả lại bới hàm.

// MyModules.define("bar",[], function() {
//   function hello(who){
//     return "let me introduce: " + who;
//   };
//   return{
//     hello: hello
//   };
// });
// MyModules.define("foo", ["bar"], function (bar){
//   var hungry = " hippo";
//   function awesome(){
//     console.log(bar.hello(hungry).toUpperCase());
//       }
//       return{
//         awesome: awesome
//       };
// });
// var bar = MyModules.get("bar");
// var foo = MyModules.get("foo");
// console.log(bar.hello("hippo"));//
// foo.awesome();

// MODULE tuong lai


// SERIES 2- PHUC LUC A -  SCOPE DYNAMID -DONG KIN DONG

// functionc foo(){
//   console.log(a);
// }
// // function bar(){
// //   var a =3;
// //   foo();
// // }
// var a = 2;
// // bar();


// Phuc luc C -LEXICAL -THIS
// viet kieu nay chua chuan

// var obj = {
//   id: "chuan",
//   cool: function coolFn(){
//     console.log(this.id);
//   }
// };
// var id = "chua chuan";
// obj.cool();// chuan
// setTimeout(obj.cool , 1000);//chua chuan





