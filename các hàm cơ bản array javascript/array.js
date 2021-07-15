
var a = ["black" , "pink" , "blue", "red"];
var b = [1,2,3,4,5];
var c = ["dog" ,"cat", "horse", "mouse","bee"];


// concat() : dùng để gộp các mảng với nhau
// cú pháp : array1.concat(array2,array3,....); 
var d = b.concat(a); // gộp mảng b với hai mảng a
console.log(d); // [1, 2, 3, 4, 5, "black", "pink", "blue", "red"] 

// copyWithin() : dùng để trí 1 đoạn trong mảng và ghi lên vị trí trong chính mảng đó 
// cú pháp : array.copyWithin(target,start,end) 
// target là vị trí bắt đầu ghi đè
// start là vị trị bắt đầu của mảng muốn trích , mặc định là 0
// end là vị trị cuối cùng mảng mảng muốn trích , mặc định là array.length
b.copyWithin(0,2,4); // 4 là vị trí kết thúc của mảng 
                     // nên chỉ copy phần tử ở vị trí 
                     // 2 và 3
console.log(b); // [3,4,3,4,5]

//entries() : trả về 1 con trỏ mảng có giá trị là 1 cặp [key,value]

var e = a.entries();
for (var pair of e){
    console.log(pair); // [[0, "black"],[1, "pink"],[2, "blue"],[3, "red"]]
}

// every() : kiểm tra các phần tử có thỏa mãn 1 điều kiện hay không , trả về true hoặc false

var isEven = b.every(function(x){
    return x % 2 == 0;
})
console.log(isEven); // false

// fill() : làm cho các phần tử trả về 1 giá trị giống nhau  
// cú pháp : array.fill(value, start, end)
// value : giá trị cần điền 
// start : vị trí trong mảng bắt đầu điền , mặc định là 0
// end : vị trí kết thúc cần điền , mặc định lầ array.length

//filler() : tìm các phần tử trong mảng thỏa mãn 1 giá trị nào đó , trả về 1 mảng các giá trị thỏa mãn
// cú pháp :  array.filter(function(currentValue, index, arr), thisValue);
    // function(currentValue, index, arr): 
        // currentValue: Giá trị của phần tử hiện tại
        // index: Không bắt buộc, là vị trí của phần tử hiện tại
        // arr: Không bắt buộc, là mảng mà chứa phần tử hiện tại
    // thisValue: Không bắt buộc, nếu truyền vào thì nó sẽ được làm giá 
    // trị this của function, nếu không truyền this sẽ là undefined.

//findIndex() :tìm vị trí cảu phần tử mảng đầu tiên thỏa mãn điều kiện đặt ra 
// cú pháp : array.findIndex(function(currentValue, index, arr), thisValue);

//forEach() : duyệt các phần tử mảng 
// cú pháp : array.forEach(function(currentValue, index, arr), thisValue);

// form() : dùng khi muốn tạo 1 mảng từ 1 đối tượng dạng mảng 
// cứ pháp : Array.from(object, mapFunction(currentValue, index), thisValue)

//include() : dùng để kiểm tra xem 1 phần tử xuất hiện trong mảng hay không 
// cú pháp : array.includes(element.start) 
//element: Bắt buộc, là giá trị của phần tử muốn kiểm tra.
//.start: Không bắt buộc, là vị trí bắt đầu tìm kiếm trong mảng, mặc định là 0.

//indexOf() : tìm vị trí đầu tiên của 1 phần tử trong mảng 
// cú pháp array.indexOf(item,start)

//isArray() : kiểm tra 1 đổi tượng có phải array hay không ,trả vể true hoặc false
// cú pháp : array.isArray(obj) trong đó obj là đối tượng cần kiểm tra 

//join() : nối các phần tử của mảng thành string
// cú pháp : array.join(separator) trong đó separator là giá trị nằm giữa các phần tử
// mảng , mặc định là dấu phẩy 

// key() : trả về 1 con trỏ mảng với giá trị là các key của mảng 
// cú pháp : array.key()

// length() : trả về độ dài của mảng 
// cú pháp : array.length

// lastIndexOf() : tìm vị trí cuối cùng của 1 phần tử trong mảng truyền vào 
// cú pháp : array.lastIndexOf(item,start)

// map() : để làm thay đổi giá trị của phần tử trong mảng 
// theo 1 logic nào đó 
// cú pháp : array.map(function(curentValue,index,arr),thisValue)
// Trong đó : 
// function(...) : function callback chạy cho mỗi phần tử của mảng
// currentValue : giá trị của phần tử hiện tải 
// index : vị trí của phần tử hiện tại
// arr : mảng chứa phần tử hiện tại 

// Pop() : xóa phần tử cuối trong mảng và trả về phần tử vừa xóa
// cú pháp : array.pop()

// push() : thêm 1 phần tử mới vào cuối mảng , trả về độ dài mảng 
// cú pháp : array.push(item1,item2,....)

// reduce() : để thực thi 1 callback lên từng phần tử (từ trái qua phải)
// với 1 biến được "tích lũy" để trả về một giá trị duy nhất.

// // cú pháp array.reduce(function(total.currentValue, currentIndex,arr),initialValue)
// trong đó
// function(...) là callback sẽ thực thi trên từng phần tử mảng 
// total : bắt buộc, là giá trị tham số initialValue trong lần chạy đầu tiên, 
// hoặc là giá trị trả về của callback này ở phần tử trước
// currentValue :Bắt buộc, là giá trị của phần tử hiện tại
var sum = b.reduce( (S,num) => S+num,0);
console.log(sum);

// reduceRight() : giống reduce nhưng duyệt từ phải sang

// reverse() : dùng để đảo ngược thứ tự mảng 
// cú pháp : array.reverse();

// shift() : xóa phần tử đầu tiên của mảng , trả về phần tử đó
// cú pháp : array.shift();

// slice() : dùng để trích 1 mảng con từ trong mảng 
// cú pháp : array.slice(stard,end)
// lưu ý , màng trích sẽ không bao gồm phần tử ở vị trí end

var f = a.slice(2,4);
console.log(f); //["blue", "red"]

// some() kiểm tra một mảng có thỏa mãn điều kiện hay không 
// nếu ít nhất 1 phần tử true thì trả về true
// nếu tất cả các phần tử đều false thì trả về false

var big7 = b.some(num => num>7);
var big4 = b.some(num => num>4);
console.log(big7); // false
console.log(big4); // true

// sort() sắp xếp các phần tử mảng theo chiều tăng dần hoặc giảm dần 
// Sắp xếp phần tử mảng theo thứ tự bảng chữ cái
a.sort();
console.log(a); 
 
// Sắp xếp mảng tăng dần

b.sort();
console.log(b); 
 
// Sắp xếp mảng giảm dần

b.sort((c , d) => d - c);
console.log(b);

// splice() thay thế phần tử trong mảng bằng phần tử khác 
c.splice(2,2,'chicken','duck');
console.log(c); //["dog", "cat", "chicken", "duck", "bee"]

//toString() trả về mảng ban đầu, ngăn cách các phần tử bới dấu phẩy
console.log(c.toString()); //dog,cat,chicken,duck,bee

// unshift() thêm 1 phần tử vào đầu mảng
var x = c.unshift('bird');
console.log(c);
console.log(x);
