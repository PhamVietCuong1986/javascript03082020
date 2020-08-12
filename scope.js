// SCOPE & CLOSURE 

// I. SCOPE
/* XAc dinh cac bien luu tru o dau trong chuong trinh
1. Doi voi ngon ngu truyen thong ma nguon se thong qua 3 buoc truoc khi thuc thi chuong trinh goi la bien dich
 - Tokenizing/lexing (the xac thuc) (var a = 2;)
 - Ghi chu: Tokenizer goi cac quy tac phan tich trang thai xem lieu a co duoc xem la mot token rieng biet 
 hay la mot phan cua TOKEN do chinh la LEXING
 - Phan tich cu phap (PARSING): Lay mot mang (array) TOKEN chuyen no thanh cac phan tu cay long nhau
 dai dien cho cu phap chuong trinh. cay AST (Abstract syntax tree)
- Cay cua (var a = 2;)
 + Nut cao nhat Variabledeclaration (gia tri 1 - value 1)
 + Nut con Identifier
 + Nut con khac AssegmentExpression co 1 nut con
   ++  Numberial Literal (gia tri 2 - value 2)
*/

