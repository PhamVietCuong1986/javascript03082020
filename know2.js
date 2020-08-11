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

//3. MANG ARRAY la mot OBJECT dac biet
//No co the co thuoc tinh, bao gom thuoc tinh length tu dong cap nhat

/* arr = [a,b,c...,,]
truy cap dua vao chi so INDEX 0,1,2,3...
arr[0];
arr[1];
*/
//  var arr = ["hello world", 42, true];
//  console.log(arr[0]);
//  console.log(arr[2]);
// console.log(arr.length);
// console.log(typeof arr);

//4. ham function
/* la mot kieu dang OBJECT con dac biet
*/
// function foo(){
//     return 42;
// }
// foo.bar = "hello world";
// console.log(foo.bar);
// console.log(foo());
// console.log(foo);

// CAC PHUONG THUC KIEU DANG DINH SAN nhw .length, .toFixed,  
//  var a = "hello world";
//  var b = 3.14259;
//  console.log(a.length);
//  console.log(a.toUpperCase());
//  console.log(b.toFixed(4));


// so sanh cac gia tri
// ket qua cua su so sanh bang nhau hay khong bang nhau trong JS deu la TRUE hoac FALSE

// SU EP BUOC
/* Trong JS co 2 dang : minh bach va tiem an
Minh bach: ban thay ro rang trong CODE co su chuyen doi dang nay sang dang khac
Tiem an: ban co the xay dung kieu ep buoc hop ly va don gian
*/
// vi du ep buoc minh bach

// var a = "42";
// var b = Number(a);
// console.log(b);

// ep buoc khong minh bach
// var a = "42";
// var b = a * 1;
// console.log(b);

// DUNG VA SAI
/* Nhac den Falsy va Truthy
Khi mot gia tri khong phai la boolean bi cuong ep thanh kieu BOOLEAN */
/* danh sach cu the cua gia tri tro thanh Falsy
"" chuoi rong
0,-0, NaN (number khong hop le)
null, undefined
false
*/
/* Neu gia tri nao khong phai la FALSY thi deu la TRUTHY*/

// DANG THUC == === != !==
/* == bang gia tri
=== bang gia tri va kieu
!= khong bang tuong doi
!== khong bang tuyet doi
*/
/*The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

If Type(x) is the same as Type(y), then
If Type(x) is Undefined, return true.
If Type(x) is Null, return true.
If Type(x) is Number, then
If x is NaN, return false.
If y is NaN, return false.
If x is the same Number value as y, return true.
If x is +0 and y is −0, return true.
If x is −0 and y is +0, return true.
Return false.
If Type(x) is String, then return true if x and y are exactly the same sequence of characters 
(same length and same characters in corresponding positions). Otherwise, return false.
If Type(x) is Boolean, return true if x and y are both true or both false. Otherwise, return false.
Return true if x and y refer to the same object. Otherwise, return false.
If x is null and y is undefined, return true.
If x is undefined and y is null, return true.
If Type(x) is Number and Type(y) is String,
return the result of the comparison x == ToNumber(y).
If Type(x) is String and Type(y) is Number,
return the result of the comparison ToNumber(x) == y.
If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
If Type(x) is either String or Number and Type(y) is Object,
return the result of the comparison x == ToPrimitive(y).
If Type(x) is Object and Type(y) is either String or Number,
return the result of the comparison ToPrimitive(x) == y.
Return false.
NOTE 1Given the above definition of equality:

String comparison can be forced by: "" + a == "" + b.
Numeric comparison can be forced by: +a == +b.
Boolean comparison can be forced by: !a == !b.
NOTE 2The equality operators maintain the following invariants:

A != B is equivalent to !(A == B).
A == B is equivalent to B == A, except in the order of evaluation of A and B.
NOTE 3The equality operator is not always transitive. For example, there might be 
two distinct String objects, each representing the same String value; each String object would be 
considered equal to the String value by the == operator, but the two String objects would 
not be equal to each other. For Example:

new String("a") == "a" and "a" == new String("a")are both true.
new String("a") == new String("a") is false.
NOTE 4Comparison of Strings uses a simple equality test on sequences of code unit values. 
There is no attempt to use the more complex, 
semantically oriented definitions of character or string equality and collating order defined in the Unicode specification. 
Therefore Strings values that are canonically equal according to the Unicode standard could test as unequal. 
In effect this algorithm assumes that both Strings are already in normalised form.
*/

/* Mot so nguyen tac
neu mot trong hai ben phep so sanh co the la true hay false tranh dung == ma dung ===
Neu mot trong hai ben phep so sanh la co the mot gia tri cu the (0, "", [], hoac array rong) tranh dung == ma dung ===
Trong tat ca cac truong hop khac CODER yen tam dung ==. de don gian cho nhieu truong hop code
*/

// khong bang != di cap ==
// khong bang tuyet doi !== di cap ===

var a = [1,2,3];
var b = [1,2,3];
var c = "1,2,3";
console.log(a == b);
console.log(a == c);
console.log(b == c);
console.log(a === b);
console.log(a === c);
console.log(b === c);
console.log(a != b);
console.log(a != c);
console.log(b != c);
console.log(a !== b);
console.log(a !== c);
console.log(b !== c);












