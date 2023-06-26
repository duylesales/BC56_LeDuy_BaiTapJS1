/*
input:
    tienLuongMotNgay
    soNgayLamViec - có thể là số thực (decimal)) như nửa ngày lương là 0.5
progress
    b1: khai báo biến chứa giá trị tiền lương và số ngày làm việc
    b2: cho tongLuong = soNgayLamViec * tienLuong
output:
    tongLuong    
*/

var tienLuongMotNgay = 100; //tiền lương một ngày làm 100 ngàn đồng
var soNgayLamViec = 7; // tổng số ngày làm việc là 7 ngày

var tongLuong = tienLuongMotNgay * soNgayLamViec;
console.log("Bai tap 1 -tongLuong:", tongLuong); // tính ra tổng lương là 700 ngàn đồng

/* ################## BAI TAP 2 ################# */

/*
input:
    soThu1
    soThu2
    soThu3
    soThu4
    soThu5

progress
    b1: khai báo biến chứa giá trị
        soThu1
        soThu2
        soThu3
        soThu4
        soThu5
    b2: cho var ketQuaTB = (soThu1El + soThu2El + soThu3El + soThu4El + soThu5El) / 5

output:
    ketQuaTB   
*/

//gán giá trị số thực cho tất cả
var soThu1 = 10;
var soThu2 = 20;
var soThu3 = 30;
var soThu4 = 40;
var soThu5 = 50;

var ketQuaTB = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5; //giá trị trung bình sẽ bằng tổng của 5 số chia cho 5

console.log("Bai tap 2 - ketQuaTB:", ketQuaTB); //kết quả của phép tính là : 30

/* ################## BAI TAP 3 ################# */

/*
input:
    giaTienUSD
    soTienUSD
progress
    b1: khai báo biến chứa giá trị giá tiền USD khi quy đổi ra tiền VND và số tiền USD cần đổi
    b2: cho tongTienVND = giaTienUSD * soTienUSD
output:
    tongTienUSD   
*/

var giaTienUSD = 23.5; //ví dụ giá tiền USD hiện nay là 23.500 VND
var soTienUSD = 2; // bạn muốn đổi 2 USD sang VND
var tongTienVND = giaTienUSD * soTienUSD; //Ta có phép tính

console.log("Bai tap 3 - tongTienVND:", tongTienVND); //kết quả của phép tính trên là 47 ngàn đồng

/* ################## BAI TAP 4 ################# */

/*
input:
    chieuDai
    chieuRong

progress
    b1: khai báo biến chứa giá trị chieuDai và chieuRong
        
    b2: cho phép tính
        diện tích : dienTich = chieuDaiEl * chieuRongEl
        chu vi : chuVi = (chieuDaiEl + chieuRongEl) * 2

output:
    kết quả của diện tích và chu vi
*/

//ví dụ ta có chiều dài là 20 và chiều rộng 40
var chieuDai = 20;
var chieuRong = 40;

//ta có công thức tính chiều dài và chiều rộng
var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) * 2;

console.log("Bai tap 4 - dienTich:", dienTich); // kết quả diện tích: 800
console.log("Bai tap 4 - chuVi:", chuVi); // kết quả chu vi: 120

/* ################## BAI TAP 5 ################# */

/*
input:
    kySo
progress
    b1: khai báo biến chứa giá trị kySo
        
    b2: cho phép tính
        hangChuc = Math.floor(kySoEl % 10)
        hangDonVi = Math.floor(kySoEl / 10)

output:
    kết quả của Tổng ký số
*/

var kySo = 32; //ví dụ ta cho ký số là 32 thì tổng 2 ký số sẽ là 3 + 2

var hangChuc = Math.floor(kySo % 10);
var hangDonVi = Math.floor(kySo / 10);

//ta có công thức
var tongKySo = hangChuc + hangDonVi;

console.log("Bai tap 5- tongKySo:", tongKySo); // kết quả của phép tính là 5
