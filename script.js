function clearCookie(){ document.cookie = "firsttime=firs.time.here; expires=Thu, 18 Dec 2000 12:00:00 UTC"}

window.onload = function () {
    console.log(getCookie('firsttime'))
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? 'Already done!' : (document.cookie = "firsttime=firs.time.here; expires=Thu, 18 Dec 2021 12:00:00 UTC", modal())
}

function modal() { document.getElementsByClassName('modal')[0].style.display='block'}