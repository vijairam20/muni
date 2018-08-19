let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollpos = window.pageYOffset;
     if(currentScrollpos > prevScrollpos)
     {
        document.getElementById("navbar").style.backgroundColor="black";
     }
     else{
        document.getElementById("navbar").style.backgroundColor="white";

     }
}
