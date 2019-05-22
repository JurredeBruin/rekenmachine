function myFunction(p1) {
    document.getElementById("demo").innerHTML += p1;
}
function myResult(p1){
var p1=
eval(document.getElementById("demo").innerHTML);
document.getElementById('demo').innerHTML = p1;
    
}
function myClear(p1) {
  document.getElementById('demo').innerHTML = p1;

}
