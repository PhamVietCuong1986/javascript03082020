// Ham REDUCE Gop phan tu
// arr.reduce(callback[, initialValue])
 const arrayNums = [1,2,3,4,5,6,7,8,9,10];// yeu cau su dung ham REDUCE tinh tong cac phan tu cua mang
 const total = arrayNums.reduce(function(tichLuy , currentValue){
 console.log(tichLuy);// total la tham so tich luy
 return tichLuy + currentValue;// tham so tichLuy ~~ voi total trong video
 },0)// 0 la gia tri tich luy ban dau cua total nen se co gia tri la 0
// do mang co 10 phan tu nen se ung 10 vong lap vaf in ra tuong ung 10 ket qua tich luy total

