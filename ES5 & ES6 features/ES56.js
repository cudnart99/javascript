// những tính năng mới của ES5

// "use strict" : báo lỗi những lỗi như sử dụng biến mà không
// khai báo , giúp code sạch hơn

// có thể truy câp vào giá trị trong chuổi bằng charAt()

// có thể viết string trên nhiều dòng , chỉ cần dùng \ 

// có thể sử dụng tên riêng làm tên cho tên thuộc tính

// String.trim() bỏ khoảng trẳng ra khỏi 1 string 

// một số hàm array mới co trong ES5

// Array.isArray()
// Array.forEach()
// Array.map()
// Array.filter()
// Array.reduce()
// Array.reduceRight()
// Array.every()
// Array.some()
// Array.indexOf()
// Array.lastIndexOf()

// JSON.parse() : chuyển từ text trong file JSON thành js object;
// JSON.stringigy : chuyển dữ liệu dạng js object thành text trong js; 

// Date.now() : trả về giá trị là số mili ây đã trôi qua tình từ 0 BC

// Date.toISOString() : trả về giá trị là ngày tháng theo chuẩn ISO

// Date.toJSON() : trả về giá trị là string , formatted theo JSON

// Object.defineProperty() : giúp định nghĩa các thuộc tính và giá trị
// của object và có thể thay đổi nó 

// một số object methods 
// Object.defineProperties(object, descriptors)
// Object.getPrototypeOf(object),
// Object.getPrototypeOf(age)
// vv ...

// Trailing commas : ES5 cho phép để dấu phẩy ở cuối định nghĩa đối 
// tượng và array

// những tính năng mới của ES6

// keywword let và const 

// arrow Function : cú pháp ngắn gọn cho function 

// vòng lắp for / of : là vòng lặp lặp qua các giá trị của objects

// JavaScript Map Objects :
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a new Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// JavaScript Set Object

// Create a Set
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// javaScript class : là templates cho js objects
 
// javaScript promises
const myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise).
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

//Symbol type : là 1 kiểu dữ liệu nguyên thủy giống như số
//
// , chuỗi hoặc Boolean
// Nó đại diện cho một mã định danh "ẩn" duy nhất mà 
// không có mã nào khác có thể vô tình truy cập.

// Default Parameter Values : ES6 cho phép thông số của function 
// có giá trị ban đầu

// Function rest Parameter Values : dấu (...) cho phép function
// làm việc với dãy vô tận đối số 

// một số hàm string mới 
String.includes()
String.startsWith()
String.endsWith()

// một số hàm array mới  
Array.from()
Array.keys()
Array.find()
Array.findIndex()
 
// Một số math methods mới 
Math.trunc() // lấy phần nguyên
Math.sign() // kiểu tra là số âm , null hay dương
Math.cbrt() // lấy căn bặc 
Math.log2() // log2()
Math.log10() // log10() , lg()

// New Number propertoes
// EPSILON
// MIN_SAFE_INTEGER
// MAX_SAFE_INTEGER

// New number Methods
Number.isInteger()
Number.isSafeInteger()

// New Global Me(thos 
if.Finite() // đã nói ở bài trước 
if.isNaN()
