var x= document.querySelector("#a");
var y=document.querySelector("#b");
var z=document.querySelector("#c");
var w=document.querySelector("#d");
var v=document.querySelector("#e");

v.addEventListener('click',function()
{
        var name=x.value;
        var regno=y.value;
        var phno=z.value;
        var enrno=w.value;
        for(var i=0;i<name.length;i++)
        {
            if(name[i]<=9||name[i]>=0)
            {
                alert("Name Cannot Have a Number!");
                break;
            }
        }
        if(regno.slice(0,6)!="NITSGR")
        {
            alert("Registration Number Format is not valid");
        }
        if(enrno.slice(4,8)!="BCSE")
        {
            alert("This form is only for CSE Students");
        }
        if(phno.toString().length!=10)
        {
            alert("Invalid Phone Number Entered, try again");
        }
});