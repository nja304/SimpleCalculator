/**
 * Created by Administrator on 4/18/2016.
 */
function add(n,m){
    return n+m;
}
function sub(n,m){
    return n-m;
}
function mul(n,m){
    return n*m;
}
function div(n,m){
    return n/m;
}
function cusEval(s){
    var n, opeIn, ope, m;
    var x=["+","-","*","/"];
    for (var i=0; i< x.length;i++){
        opeIn= s.indexOf(x[i]);
        if (opeIn!=-1){
            console.log("Found operator"+opeIn);
            break;
        }

    }

    n= parseInt(s.substring(0,opeIn));
    m= parseInt(s.substr(opeIn+1));
    ope=s.substring(opeIn,opeIn+1);
    switch (ope){
        case "+":
            return add(n,m);
        case "-":
            return sub(n,m);
        case "*":
            return mul(n, m);
        default:
            return div(n,m);

    }
}



