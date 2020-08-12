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


