var iNow = 0;
var last = -1;
$(document).swipeUp(function(){
    last= iNow;
    iNow++;
    $(".page").eq(last).addClass("moveToTop");
    $(".page").eq(iNow).removeClass("hide").addClass("moveFromBottom")

    setTimeout(function(){
        $(".page").eq(iNow).find("img").removeClass("hide");
    },600)
})