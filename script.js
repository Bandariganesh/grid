
function get()
{
    document.getElementById("www").innerHTML="hi";
}

function fun1() {
    var g=5;
    var v=46;
    document.getElementById("but1").style.backgroundColor="white";
    document.getElementById("but2").style.backgroundColor='rgba(221, 204, 46, 0.89)';
    document.getElementById("but3").style.backgroundColor='rgba(221, 204, 46, 0.89)';
    
    var a=document.getElementById("tab1");
    var b=document.getElementById("tab2");
    var c=document.getElementById("tab3");
    if(a.style.display==="none")
    {
        console.log(a);
        a.style.display="grid";
        b.style.display="none";
        c.style.display="none";
    }
    else
    {
        a.style.display="none";
        
    }
}

function fun2() {
    document.getElementById("but2").style.backgroundColor="white";
    document.getElementById("but1").style.backgroundColor='rgba(221, 204, 46, 0.89)';
    document.getElementById("but3").style.backgroundColor='rgba(221, 204, 46, 0.89)';  
    var a=document.getElementById("tab2");
    var b=document.getElementById("tab1");
    var c=document.getElementById("tab3");
    if(a.style.display==="none")
    {
        a.style.display="grid";
        b.style.display="none";
        c.style.display="none";
    }
    else
    {
        a.style.display="none";
        
    }
}

function fun3() {
    document.getElementById("but3").style.backgroundColor="white";
    document.getElementById("but1").style.backgroundColor='rgba(221, 204, 46, 0.89)';
    document.getElementById("but2").style.backgroundColor='rgba(221, 204, 46, 0.89)';
    var a=document.getElementById("tab3");
    var b=document.getElementById("tab1");
    var c=document.getElementById("tab2");
    if(a.style.display==="none")
    {  
        a.style.display="grid";
        b.style.display="none";
        c.style.display="none";
    }
    else
    {
        a.style.display="none";
        
    }
}