var cel=document.getElementById("celcius");
var far=document.getElementById("Fahrenheit");
var j=document.querySelector(".container");
j.scrollIntoView();
cel.addEventListener('input',function()
{
    var c=this.value;
    var f=(c*(9/5))+32;
    far.value=f;
});
far.addEventListener('input',function()
{
    var f=this.value;
    var c=(f-32)*(5/9);
    cel.value=c;
});
function themechanger(){
    var check=document.querySelector(".ch");

    if(check.attributes[2].value=='off')
        {
            check.setAttribute("class","fas fa-toggle-off fa-4x icons ch");
            check.setAttribute("name","on");
        }
    else if(check.attributes[2].value=='on')
    {
        check.setAttribute("class","fas fa-toggle-on fa-4x icons ch");
        check.setAttribute("name","off");
    }
    document.querySelector(".bdy").classList.toggle("tc");
    document.querySelector(".h2").classList.toggle("htc");
    document.querySelector(".container").classList.toggle("contd");
}
function hamburger(){
    document.querySelector(".hamburg").classList.toggle("visib");
}