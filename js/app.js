var pheptinh = document.getElementById("pheptinh");

function setPhepTinh(s) {
    pheptinh.innerHTML = s;
}

function getPhepTinh() {
    return pheptinh.innerHTML;
}

function updatePhepTinh(n) {
    var m=getPhepTinh();
    if(m==0){
        setPhepTinh(n);
    }
    else {
        setPhepTinh(getPhepTinh() + n);
    }
}

function clearS(){
    setPhepTinh("0");
}

function updateOperator(m) {
    var lastChar = (getPhepTinh()).substring(getPhepTinh().length - 1, getPhepTinh().length);
    if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        setPhepTinh(getPhepTinh().substring(0, getPhepTinh().length - 1));
    }
    setPhepTinh(getPhepTinh() + m);
}
function evalute(){

   setPhepTinh(cusEval(getPhepTinh()));
}