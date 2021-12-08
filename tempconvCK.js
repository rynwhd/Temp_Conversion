var cel=document.getElementById("celcius");
var far=document.getElementById("kelvin");
cel.addEventListener('input',function()
{
    var c=Number(this.value);
    var k=c+273.15;
    far.value=k;
});
far.addEventListener('input',function()
{
    var k=Number(this.value);
    var c=k-273.15;
    cel.value=c;
});
function themechanger(){
    document.querySelector(".bdy").classList.toggle("tc");
    document.querySelector(".h2").classList.toggle("htc");
}
function hamburger(){
    document.querySelector(".hamburg").classList.toggle("visib");
}