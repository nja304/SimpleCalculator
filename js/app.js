var pheptinh = document.getElementById("pheptinh");

function setPhepTinh(s) {
    pheptinh.innerHTML = s;
}

function getPhepTinh() {
    return pheptinh.innerHTML;
}

function updatePhepTinh(n) {
    setPhepTinh(getPhepTinh() + n);
}


function updateOperator(m) {
    var lastChar = (getPhepTinh()).substring(getPhepTinh().length - 1, getPhepTinh().length);
    if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        setPhepTinh(getPhepTinh().substring(0, getPhepTinh().length - 1));
    }
    setPhepTinh(getPhepTinh() + m);
}