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
Tới một thời điểm nào đó, Hàm A sẽ được hàm B gọi lại (callback)*/

 function inSoTheoDieuKien(callback){// dong vai tro ham B
    for(var i =1; i<=100; i++){
        const dk = callback(i);
        if(dk){
            console.log(i);// neu dieu kien dung thuc hien in ra man hinh i, neu False khong thuc hien
        }
    }
}

     function inSoChinhPhuong(jx){// jx cung la tham so no giong tham so // Dong vai tro ham A
        if(Math.sqrt(jx) % 1 ===0){
            return true;
        } else{
            return false;
        }
    }

    function inSoChan(y){// jx cung la tham so no giong tham so // Dong vai tro ham A
        if(y % 2 ===0){
            return true;
        } else{
            return false;
        }
    }
    function inSoLe(y){// jx cung la tham so no giong tham so // Dong vai tro ham A
        if(y % 2 ===1){
            return true;
        } else{
            return false;
        }
    }

inSoTheoDieuKien(inSoChinhPhuong);
inSoTheoDieuKien(inSoChan);
inSoTheoDieuKien(inSoLe);

