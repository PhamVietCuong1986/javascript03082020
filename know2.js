// HIEU VE JAVASCRIPT UP&GOING

//1. GIA TRI VA KIEU
/* 
string, number
boolean
null and undefined
object
symbol (ES6) */
// Trong JS (typeof a) nghia la kieu gia tri hien tai ben trong a khong phai la "kieu cua a"
// trong JS chir cos gia tri moi co kieu
// bien chi don gian 

// var a;
// typeof a;
// console.log(typeof a);

// 2. OBJECT {a: , b: ,c: ...}

/* Khi ban de cap cac thuoc tinh, moi cai deu co gia tri cua rieng chung voi bat ky kieu nao
co 2 cach truy cap vao thuoc tinh OBJECT
C1: OBJECT. hoac OBJECT[""]
*/

// var obj = { a : "hello world" , b : 42, c: true};
// console.log(obj.a);//TRUY CAP VAO PROPERTY
// console.log(obj["a"]);//TRUY CAP VAO PROPERTY

// Phan biet khi truy cap thuoc tinh dau cham(.) hay dau ngoac [""] no khong phai la []

//  var obj = { a : "hello world", 
//              b : 42};
// var b = "a";
// console.log(obj.b);//console.log(obj["b"]);
// console.log(obj["b"]);
// console.log(obj[b]);// cau truc khong phai truy cap vao thuoc tinh cua object

//co vai kieu gia tri co the tuong tac voi chuong trinh JS (array va function). No duoc coi la kieu thu cap phien ban dac biet cua OBJECT

//3. MANG ARRAY 

/* arr = [a,b,c...,,]
truy cap dua vao chi so INDEX 0,1,2,3...
arr[0];
arr[1];
*/
 var arr = ["hello world", 42, true];
 console.log(arr[0]);
 


