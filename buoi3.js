//11. callback
/*callback tức là ta truyền một đoạn code (Hàm A) này vào một đoạn code khác (Hàm B). 
Tới một thời điểm nào đó, Hàm A sẽ được hàm B gọi lại (callback)*/
// phuong thuc hay con goi la ham
// function nhan2(number){
//     return number * 2;
// }
// function xulymang(array){
//     for(i = 0; i < array.length; i++){
//         array[i] = array[i] * 2;
//     }
// }
// const array =[1,2,3,4];
// xulymang(array);
// console.log(array);

// su dung callback 
// function xulymang(array , callback){// array, callback chi la tham so tuong trung cua ham xulymang
//     for(i = 0; i < array.length; i++){
//         array[i] = callback(array[i]);
//     }
// }
// const array1 =[1,2,3,4];// co the thay doi gia tri cac phan tu index trong mang, object cho du gan la const
// xulymang(array1,nhan2);//gan tham so array1 =array, nhan2 = callback cho ham xulymang
// console.log(array1);

// viet cac funtion chay 1-100
// viet funtion inSoLe
// viet funtion inSoChan
// viet funtion inSoChia3Du1
// viet funtion inSoChinhPhuong

// function data(){
//     for(var i =1; i<=100; i++){
//     console.log(i);}
// }
// data();

// function inSoChan(){
//     for(var i =1; i<=100; i++){
//         if(i % 2 ===0){
//             console.log(i);
//         }
//     }
// }
//  inSoChan();

//  function inSoLe(){
//     for(var i =1; i<=100; i++){
//         if(i % 2 ===1){
//             console.log(i);
//         }
//     }
// }
//  inSoLe();


//  function inSoChia3Du1(){
//     for(var i =1; i<=100; i++){
//         if(i % 3 ===1){
//             console.log(i);
//         }
//     }
// }
//  inSoChia3Du1();

//  function inSoChinhPhuong(){
//     for(var i =1; i<=100; i++){
//         if(Math.sqrt(i) % 1 ===0){
//             console.log(i);
//         }
//     }
// }
//  inSoChinhPhuong();

// viet duoi dang CALLBACK tham so: sodu
//  function inSo(sodu ,sochia){
//     for(var i =1; i<=100; i++){
//         if(i % sochia ===sodu){
//             console.log(i);
//         }
//     }
// }
//  inSo(1,3);// gan gia tri cho tham so: sodu=0, tuc in so chan, sodu=1 so le

 // VIET DANG CALLBACK 2 HAM RIENG LE DANG CALLBACK

 /*callback tức là ta truyền một đoạn code (Hàm A) này vào một đoạn code khác (Hàm B). 
Tới một thời điểm nào đó, Hàm A sẽ được hàm B gọi lại (callback)
Tham so la gia tri tuong trung cho bien de tham gia bieu thuc toan tu, nen khong can khai bao */

// Cach viet tuong minh cho callback

//  function inSoTheoDieuKien(callback){// dong vai tro ham B
//     for(var i =1; i<=100; i++){
//         const dk = callback(i);
//         if(dk){
//             console.log(i);// neu dieu kien dung thuc hien in ra man hinh i, neu False khong thuc hien
//         }
//     }
// }

//      function inSoChinhPhuong(jx){ // Dong vai tro ham A
//         if(Math.sqrt(jx) % 1 ===0){// if(Math.sqrt(jx) % 1 ===0) trong ham A ~~ if(dk) hay If(callback(i)) trong Ham B
//             return true;
//         } else{
//             return false;
//         }
//     }

//     // function inSoChan(y){//  Dong vai tro ham A
//     //     if(y % 2 ===0){// if( y % 2 ===0) trong ham A ~~ if(dk) hay If(callback(i)) trong Ham B
//     //         return true;
//     //     } else{
//     //         return false;
//     //     }
//     // }
//     // function inSoLe(y){// y cung la tham so no giong tham so // Dong vai tro ham A
//     //     if(y % 2 ===1){// if( y % 2 ===1) trong ham A ~~ if(dk) hay If(callback(i)) trong Ham B
//     //         return true;
//     //     } else{
//     //         return false;
//     //     }
//     // }

//     function inSoChia3Du1(zz){// y cung la tham so no giong tham so // Dong vai tro ham A
//         if(zz % 3 ===1){// if( zz % 3 ===1) trong ham A ~~ if(dk) hay If(callback(i)) trong Ham B
//             return true;
//         } else{
//             return false;
//         }
//     }
// // callback, y,jx, zz la tham so la gia tri tuongg trung cho bien so tham gia bieu thuc
// // tham so khong can khai bao
// inSoTheoDieuKien(inSoChinhPhuong); // Ham A duoc goi trong ham B
// // inSoTheoDieuKien(inSoChan);
// // inSoTheoDieuKien(inSoLe);
// inSoTheoDieuKien(inSoChia3Du1);

// Cach viet higher order function

// function inSoTheoDieuKien(callback){// dong vai tro ham B
//     for(var i =1; i<=100; i++){
//         const dk = callback(i);
//         if(dk){
//             console.log(i);// neu dieu kien dung thuc hien in ra man hinh i, neu False khong thuc hien
//         }
//     }
// }

// inSoTheoDieuKien(function(ix){// function vo danh vi khong co ten chi co tham so i, chi su dung tuc thoi khong tai su dung
// if(ix % 2 ===1){ return true}
//    else{ return false}
// });

     
// proto.type.map
//Phuong thuc MAP giup tao ra mot mang ARRAY moi bang cach thuc thi mot ham len tung phan tu mang duoc goi
//MAP la ham dang callback tao ra bang moi khong gi de vao mang duoc goi, khong thay doi kich thuoc mang

// const arrayNums = [1,2,3,4,6];
// for(var i = 0;i < arrayNums.length; i++){
//     arrayNums[i] = arrayNums[i] * 2;
// }
// console.log(arrayNums);

// const arrayNums = [1,2,3,4,6];

// const newArraynums = arrayNums.map(function(value , index){
//         return value * 2;
// });
// console.log(newArraynums);


// Make an array of strings of the names
function namesOnly(arr) {
    const newArr = arr.map(function(person , index){
        return person.name
    })
    console.log(newArr);

} 

namesOnly([
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
])
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


