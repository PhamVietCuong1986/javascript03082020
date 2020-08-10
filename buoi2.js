//9. vong lap for
// for (var i = 0 ; i < 10 ; i++){
//     console.log(i)
// }
//for of doi voi Array

// lay gia tri trong mang du lieu
// const arrayNumbers = [5,4,10,15,6]
// for(var value of arrayNumbers){
//     console.log(value)
// }
// for of khong su dung cho Object

// for in  doi voi Array 
// truyen key cua mang
// const arrayNumbers = [5,4,10,15,6]
// for (const key in arrayNumbers) {
//     console.log(key)
//}
// for in tim va lay gia tri object
// const teo = {
//     name : "nguyen van teo",
//     age : 10
// }
// for (const key in teo) {
//     console.log(key)
// }
// interabal manng tim lay du lieu thong qua index
// object tim  va lay du lieu thong qua thuoc tinh cua bien
// thuc hanh bai tap
// var a = [1, 2, 4, 8, 16]
// // su dung vong lap for de lay gia tri tu cuoi tre ve
// for(var i = a.length - 1; i >= 0; i--){
//     console.log(a[i])
// }
/**
 * Sử dụng vòng lặp for...in để in ra tất cả các key trong object sau, in ra cả các key của các nested object (object con lồng bên trong object lớn)
 * Gợi ý: đây là bài tập khó, bạn nên tìm hiểu về recursive trước
 */

var apartment = {
    bedroom: {
      area: 20,
      bed: {
        type: 'twin-bed',
        price: 100
      }
    }
  };
  
  function getkey(object){
      for (const key in object) {
          console.log(key)
          for(const keyBedroom in object[key]){
              console.log(keyBedroom)
              for(const keyBed in object[key][keyBedroom]){
                  console.log(keyBed)
              }

          }
      }
  }
  
  getkey(apartment)
  
  /**
   * Kết quả mong muốn:
   * bedroom
   * area
   * bed
   * type
   * price
   * Chú ý: không cần hiển thị ra đúng thứ tự như trên
   */
  
    

