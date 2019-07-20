var txt = "";
var person = {fname:"Bill", lname:"Gates", age:62};
var x;
for (x in person) {
    txt += person[x] + " ";
}
document.write(`${txt}<br>`);
try {
    adddlert("欢迎");
}
catch(err) {
    document.write(`${err.message}<br>`);
}
var j = "";
function message() {
    try {
        adddlert("Welcome");
    }
    catch(err) {
        j = '此页面出错。\n';
        j += "单击“确定”继续查看此页面，\n";
        j += "或取消以返回主页。\n\n";
        if(!confirm(j)) {
            document.location.href =
                "https://p18239.github.io/";
        }
    }
}