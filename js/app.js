var pheptinh = document.getElementById("pheptinh").innerHTML;
function updatePhepTinh(n){
    pheptinh = n;
}


function updateOperator(m){
    var lastChar=pheptinh.substring(pheptinh.length-1, pheptinh.length);
    if (lastChar=="+"||lastChar=="-"||lastChar=="*"||lastChar=="/"){
        pheptinh=pheptinh.substring(0,pheptinh.length-1);
    }
    pheptinh=pheptinh+m;

}