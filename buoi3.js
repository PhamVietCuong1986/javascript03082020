//11. callback
/*callback tức là ta truyền một đoạn code (Hàm A) này vào một đoạn code khác (Hàm B). 
Tới một thời điểm nào đó, Hàm A sẽ được hàm B gọi lại (callback)*/
// phuong thuc hay con goi la ham
function nhan2(number){
    return number * 2;
}
// function xulymang(array){
//     for(i = 0; i < array.length; i++){
//         array[i] = array[i] * 2;
//     }
// }
// const array =[1,2,3,4];
// xulymang(array);
// console.log(array);

// su dung callback 
function xulymang(array , callback){// array, callback chi la tham so tuong trung cua ham xulymang
    for(i = 0; i < array.length; i++){
        array[i] = callback(array[i]);
    }
}
const array1 =[1,2,3,4];
xulymang(array1,nhan2);//gan tham so array1 =array, nhan2 = callback cho ham xulymang
console.log(array1);
