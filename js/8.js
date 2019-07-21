var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits1;

function y() {
    fruits1.unshift("Lemon");
    document.getElementById("demo").innerHTML = fruits1;
}
var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits2;
fruits2.shift();
document.getElementById("demo2").innerHTML = fruits2 +"<br>";

var fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo3").innerHTML = "原数组：<br>" + fruits3;
function u() {
    fruits3.splice(2, 0, "Lemon", "Kiwi");
    document.getElementById("demo4").innerHTML = "新数组：<br>" + fruits3;
}
var fruits4 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo5").innerHTML = fruits4;
document.getElementById("demo6").innerHTML = fruits4.pop();
document.getElementById("demo7").innerHTML = fruits4;