var iNow = 0;

var last = -1;

$(document).swipeUp(function () {
    last = iNow;
    iNow++;
    if (iNow <= $(".page").length - 1) {

    }
    $(".page").eq(last).addClass("moveToTop");
    $(".page").eq(iNow).removeClass("hide").addClass("moveFromBottom")
    setTimeout(function () {
        $(".page").eq(iNow).find("img").removeClass("hide");
    }, 600)
})
$(document).swipeDown(function () {
    if (iNow >= 1) {
        last = iNow;
        iNow--;
        $(".page").eq(last).addClass("moveToTop");
        $(".page").eq(iNow).removeClass("moveFromBottom").addClass("hide")
        setTimeout(function () {
            $(".page").eq(iNow).find("img").removeClass("hide");
        }, 600)
    }
    else {
        return 0;
    }
})