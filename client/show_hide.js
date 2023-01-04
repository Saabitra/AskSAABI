var a;
function submit_chat()
{
    if(a==1)
    {
        document.getElementById("body_chat").style.display="none";
        document.getElementById("chat_container").style.display="block";
        return a=0;
    }
    else
    {
        document.getElementById("body_chat").style.display="block";
        document.getElementById("chat_container").style.display="none";
        return a=1;
    }
}