//CÁC HẰNG MẶC ĐỊNH TRONG JAVASCRIPT

// Infinity : đại diện cho vô cùng 
// trong js , 1 số chia cho 0 sẽ có giá trị là vô cùng 

// NaN : là hằng mang giá trị không phải là số 
// Tuy nhiên không thế sử dụng để kiếm tra 1 số có phải là số hày không 
// var a = "string"
// console.log(a==NaN); // false

// undefined : là hằng đại diện cho một biến chưa được khai báo giá trị

// var a;
// console.log(a===undefined); // true

// CÁC HÀM MẶC ĐỊNH TRONG JAVASCRIPT

// encodeURI() được sử dụng để mã hóa một URI.
// cú pháp encodeURI(uri)

// decodeURI() được sử dụng khi bạn cần giải mã một URI.
// Cú pháp: decodeURI(uri)

// encodeURIComponent() được sử dụng khi bạn muốn mã hóa URI trở thành một phần của URI khác.
// Cú pháp: encodeURIComponent(uri). 

// decodeURIComponent() được sử dụng khi bạn muốn giải mã một phần URI khác.
// Cú pháp: decodeURIComponent(uri)

// eval() : hàm chạy 1 đoạn code js dưới dạng 1 string
// Cú pháp: eval(javaScriptString)
// var a = 1;
// var b = 2;
// var x = eval("a + b");
// console.log(x); // 3

// isFinite() : kiểm tra 1 số có hữu hạn hay không 
isFinite(123); // true
isFinite(-1.23); // true
isFinite(5-2); // true
isFinite(0); // true
isFinite("123"); // true
isFinite("Hello"); // false
isFinite("2005/12/12"); // false
isFinite(+Infinity); // false
isFinite(-Infinity); // false
isFinite(NaN); // false

// isNaN() : kiểm tra giá trị có phải NaN hay không 
isNaN(123); //false
isNaN(-1.23); //false
isNaN(5-2); //false
isNaN(0); //false
isNaN('123'); //false
isNaN('Hello'); //true
isNaN('2005/12/12'); //true
isNaN(''); //false
isNaN(true); //false
isNaN(undefined); //true
isNaN('NaN'); //true
isNaN(NaN); //true
isNaN(0 / 0); //true

// Number() : ép 1 giá trị bất kì về dạng số 
Number(true); // 1
Number(false); // 0
Number(new Date()); // 1579531129765 (timestamp of now)
Number("999"); // 999
Number("999 888"); // NaN
// nếu ép thời gian về dạng số thì sẽ lấy giá trị là giây tính từ 0 BC

// parseFloat() : ép 1 chuỗi thành số dấu phẩy động 
parseFloat("10"); // 10
parseFloat("10.00"); // 10
parseFloat("10.33"); // 10.33
parseFloat("34 45 66"); // 34
parseFloat(" 60 "); // 60
parseFloat("40 years"); // 40
parseFloat("He was 40"); // NaN

// parseInt() : ép 1 chuổi về dạng số nguyên 
parseInt("10"); // 10
parseInt("10.00"); // 10
parseInt("10.33"); // 10
parseInt("34 45 66"); // 34
parseInt(" 60 "); // 60
parseInt("40 years"); // 40
parseInt("He was 40"); // NaN
parseInt("10", 10); // 10
parseInt("010"); // 10
parseInt("10", 8); // 8
parseInt("0x10"); // 16
parseInt("10", 16); // 16

// String() : ép 1 giá trị bát kì về dạng chuỗi
var x1 = Boolean(0);
var x2 = Boolean(1);
var x3 = new Date();
var x4 = "12345";
var x5 = 12345;
console.log(String(x1)); // 'false'
console.log(String(x2)); // 'true'
console.log(String(x3)); // 'Sat Feb 01 2020 02:36:44 GMT+0000 (Coordinated Universal Time)'
console.log(String(x4)); // '12345'
console.log(String(x5)); // '12345'



