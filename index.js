const getcolor = () =>{
    const randomnum = Math.floor(Math.random()*16777215);
    const randomcode = "#"+ randomnum.toString(16);
    console.log(randomcode);
    document.body.style.backgroundColor= randomcode;
    document.getElementById('color-code').innerHTML= randomcode;
    // navigator.clipboard.writeText(randomcode);   used to copy color code in your clipboard;
}
// event call
document.getElementById('btn').addEventListener("click" , getcolor);

// initial call
getcolor();