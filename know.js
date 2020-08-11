// var b = 5;
// var a = b*2;
// console.log(a);
// thuc hien phep gan a = 
// OUT PUT
//console.log (a). log goi la ham vaf ham yeu cau lay gia tri b print tren console
// console la Object tham chieu noi co ham log
// INPUT
// age = 10;
// console.log(age);
// var a = 20;
// a = a +1;
// a = a*2;
// console.log(a);
// chuyen doi kieu
// may tinh chi hieu va thuc hien cac phep tinh dang kieu number
// de nguoi dung nhin thay tren man hinh no thuoc kieu string
// cac con so nguoi dung nhin thay duoc tren man hinh khi no da duoc chuyen doi tu number sang string
// var a = "42";
// var b = Number(a);
// console.log(a);
// console.log(b);
// phep so sanh
// var a = "42";
// var b = 42;
// var c = a != b;
// console.log(c)
// may tinh chi quan tam ma may chuoi nhi phan OS va 1S den bien dich
// comment dong don
/* comment nhieu dong
doan the trong html
hay khog
*/
// variable 
// Mot vai ngon ngu lap trinh bien de chua mot gia tri theo mot kieu rieng biet (bien thuc thi)
// mot vai ngon ngu nhan manh kieu cho bien dynamic typing. bien dai dien cho mot gia tri du la kieu gia tri gi (Java script)
// var amount = 99.99;
// amount = amount*2;
// amount = "$" + String(amount);
// console.log(amount);
// state la thay doi kieu gia tri cua bien khi chay chuong trinh
// khai bao bien Constance
// neu chuong trinh gia tri cua bien khong doi khi thuc hien phai khai bao const

// var tax = 0.08 ;
// var  amount = 99.99;
// amount = amount * 2;
// amount = amount + (amount * tax);
// console.log(amount);
// console.log(amount.toFixed(2));
// var TAX_RATE = 0.08 ;
// var a = 11.11;
// a = a*2;
// a = a + (a * TAX_RATE);
// console.log(a);
// console.log(a.toFixed(3));

// BLOCKS 1 Block duoc xac dinh bang cac bao mot hoac nhieu lenh trong dau ngoac {}
// block thuong duoc gan lenh dieu khien IF hoac vong lap FOR

// var  amount = 99.99;
// if(amount > 10) {
//     amount = amount * 2;
//     console.log(amount);
// }
// sau dau {} khong co dau ;
// 2 lenh trong {} chi duoc thuc hien neu thoa man dieu kien amount > 10, neu khong se bo qua 2 lenh trong block

 // DIEU KIEN IF. neu dieu kien nay dung hay lam theo {} cac lenh trong block
 // IF duoc thuc thi trong dau () de the hien nhu la true hoac False
 // ban cung co the thuc hien thay the mot so dieu kien neu khong thoa man, goi menh de ELSE
//  var bank_balance = 301.23;
//  var amount = 99.99;
//  if( amount > bank_balance) {
//      console.log(" i want to buy this phone");
//  }
// SU DUNG DIEU KIEN if() {} else {}
//  var ACESSORY_PRICE = 9.99;
//  var amount = 99.99;
//  var bank_balance = 301.23;
//  amount = amount * 2;
//   if( amount < bank_balance) {
//       amount = amount + ACESSORY_PRICE;
//      console.log(" i want to buy this phone");
//      console.log(amount);
//  } 
//  else{
//      console.log(" NO, THANKS");
//  }

/* JS  vi du tren 
xac dinh danh sach cac gia tri dac trung coi la Falsy boi vi khi bij ep "boolean" 
no se tro thanh False-- bao gom gia tri (0, "")
 bat ky gia tri nao khong co danh sach falsy no chuyen thanh Truthy-- bao gom (99.99, free )*/
// DIEU KIEN SWITCH dung de thuc hien mot loat lenh dieu kien IF ELSE


// VONG LAP 
/*la lap lai mot tap hop hanh dong cho den khi co mot dieu kien nhat dinh that bai
 noi cach khac chi lap lai neu dieu kien thoa man
 mot vong lap bao gom dieu kien kiem tra cung nhu 1 block (block {}), 
 moi lan block vong lap duoc thuc hien no duoc goi la su lap lai */
 /* vong lap WHILE(){block lenh} va dang "DO{block lenh} ... WHILE() " 
 minh hoa khai niem lap lai mot BLOCK cau lenh 
 cho den khi dieu kien khong con duoc danh gia laf TRue */
//  var NumberOfCustomer = 9;
//  while(NumberOfCustomer > 0){
//      console.log("how may i help you")
//      NumberOfCustomer = NumberOfCustomer - 1;
//  }
//  do{
//      console.log("How may i help you");
//      NumberOfCustomer = NumberOfCustomer - 1;
//  } while(NumberOfCustomer > 0);
 /* neu dieu kien kiem tra la false thi lan lap ke tiep se khong chay
 co nghia dieu kien khoi tao false thi vong lap WHILE se khong chay,
 va vong lap DO .. WHILE se chay lan dau
 Dieu kien kiem tra cho moi vong lap giong nhu co lenh IF ben trong vog lap */
 /* Dung lenh BREAK se dung vong lap
 Dung bien lap i de lam vong lap cho nhom dem so */
//  var i = 0;
//  while(true){
//      if((i<=9) === false){
//          break;
//      }
//      console.log(i);
//      i = i+1;
//  }
// thay the ca doan lenh tren for

// VONG LAP FOR()
/* vong lap FOR co 3 menh de
menh de 1: menh de khoi tao (var i = 0)
menh de 2: menh de kiem tra dieu kien (i<=9)
menh de 3: menh de vong lap,menh de cap nhat i=i+1
*/

// for (var i = 0; i <= 9; i = i+1)
// console.log(i);

/* HAM FUNCTION
Chuong trinh can tach code thanh nhieu phan de su dung di su dung lai day goi la Function
Mot ham Function la mot phan code duoc dat ten va co the duoc goi bang ten
Code ben trong no se chay cho moi lan goi
*/
function printAmount() {
    console.log(amount.toFixed(2));
    
}
var amount = 99.99;
printAmount();
amount = amount *2;
printAmount();
// ham print thay the cho console.log()







 






