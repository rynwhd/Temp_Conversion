var far=document.getElementById("Fahrenheit");
var kel=document.getElementById("kelvin");
far.addEventListener('input',function()
{
    var f=Number(this.value);
    var k=((f-32)*(5/9))+273.15;
    far.value=k;
});
kel.addEventListener('input',function()
{
    var k=Number(this.value);
    var f=(k-273.15)*(5/9)-32;
    cel.value=f;
});
function themechanger(){
    document.querySelector(".bdy").classList.toggle("tc");
    document.querySelector(".h2").classList.toggle("htc");
}
function hamburger(){
    document.querySelector(".hamburg").classList.toggle("visib");
}