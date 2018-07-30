function overShow(obj,e) {
    var showDiv = document.getElementById('showDiv');
    var theEvent = window.event|| e;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    showDiv.style.left = x+'px';
    showDiv.style.top = y+'px';
    showDiv.style.display = 'block';
    //alert(obj.innerHTML);
    showDiv.innerHTML = obj.innerHTML;
}

function outHide() {
    var showDiv = document.getElementById('showDiv');
    showDiv.style.display = 'none';
    showDiv.innerHTML = '';
}


function imgRefresh1() {
    document.getElementById('imgshow').setAttribute("src","img/boy_glasses.jpg");
}
function imgRefresh2() {
    document.getElementById('imgshow').setAttribute("src","img/boy_sport.jpg");
}
function imgRefresh3() {
    document.getElementById('imgshow').setAttribute("src","img/boy_hat.jpg");
}
function imgRefresh4() {
    document.getElementById('imgshow').setAttribute("src","img/girl_rollhair.jpg");
}
function imgRefresh5() {
    document.getElementById('imgshow').setAttribute("src","img/girl_shorthair.jpg");
}
function imgRefresh6() {
    document.getElementById('imgshow').setAttribute("src","img/girl_silent.jpg");
}

function nowFitShow() {
    document.getElementById('imgnow').setAttribute("src",document.getElementById('imgshow').src);
}

function showFitNow() {
    document.getElementById('imgshow').setAttribute("src",document.getElementById('imgnow').src);
}

$('#boyg').on('click', imgRefresh1);
$('#boys').on('click', imgRefresh2);
$('#boyh').on('click', imgRefresh3);
$('#girlr').on('click', imgRefresh4);
$('#girlsh').on('click', imgRefresh5);
$('#girlsi').on('click', imgRefresh6);
$('#imgsave').on('click', nowFitShow);
$('#changeimg').on('click', showFitNow);



function loadData()
{
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET","x_mailbox_demo.html",false);
    xmlhttp.send();
    document.getElementById("update").innerHTML=xmlhttp.responseText;
}




function talk() {

    var Words = document.getElementById("chatshow");
    var TalkWords = document.getElementById("chatinput");
    var TalkSub = document.getElementById("talksub");
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var currentTime =  hour + ":" + minute;
        //定义空字符串
        var str = "";
        if(TalkWords.value == ""){
            return;
        }
        str =   '<div class="right">' +
                '<div class="author-name">' +
                '<a href="x_personal_page_show_demo.html" target="_blank" style="color: #0d8ddb"><strong>我</strong></a>' +
                '<small class="chat-date">' +
                 currentTime +
                '</small>' +
                '</div>' +
                '<div class="chat-message">' +
                 TalkWords.value +
                '</div>' +
                '</div>'
                +'<br>';
        Words.innerHTML = Words.innerHTML + str;
        Words.scrollTop = Words.scrollHeight;
    TalkWords.value = "";
}


function Recieve() {
    var Words = document.getElementById("chatshow");
    var str = "";
    var str2 = str;

    function getJson()
    {
        $.getJSON("js/userinfo.json", function (data) {
            $.each(data, function (infoIndex, info) {
                str =   '<div class="left">' +
                        '<div class="author-name">' +
                        '<a href="x_personal_page_show_demo.html" target="_blank" style="color: #0d8ddb"><strong>info["name"]</strong></a>' +
                        '<small class="chat-date">' +
                        'info["time"]' +
                        '</small>' +
                        '</div>' +
                        '<div class="chat-message active">' +
                        'info["message"]' +
                        '</div>' +
                        '</div>'
                        +'<br>';
            });
        });
    }

    if(str2 === str){
        setTimeout("getJson()",1000);
    }
    else {
        str2 = str;
    }

    if (str != "") {
        Words.innerHTML = Words.innerHTML + str;
        Words.scrollTop = Words.scrollHeight;
    }
    setTimeout("Recieve()",1000);
}

function Justice1() {
    var Friend = document.getElementById("friend1");
    var color = Friend.classList.contains("info-element");
    if (color == true){
        Friend.classList.remove("info-element");
        Friend.classList.add("white-element");
    }
    else {
        Friend.classList.remove("danger-element");
        Friend.classList.add("white-element");
    }
    return true;
}

function Justice2() {
    var Friend = document.getElementById("friend2");
    var color = Friend.classList.contains("info-element");
    if (color == true){
        Friend.classList.remove("info-element");
        Friend.classList.add("white-element");
    }
    else {
        Friend.classList.remove("danger-element");
        Friend.classList.add("white-element");
    }
    return true;
}

function Justice3() {
    var Friend = document.getElementById("friend3");
    var color = Friend.classList.contains("info-element");
    if (color == true){
        Friend.classList.remove("info-element");
        Friend.classList.add("white-element");
    }
    else {
        Friend.classList.remove("danger-element");
        Friend.classList.add("white-element");
    }
    return true;
}

function Justice4() {
    var Friend = document.getElementById("friend4");
    var color = Friend.classList.contains("info-element");
    if (color == true){
        Friend.classList.remove("info-element");
        Friend.classList.add("white-element");
    }
    else {
        Friend.classList.remove("danger-element");
        Friend.classList.add("white-element");
    }
    return true;
}

function Justice5() {
    var Friend = document.getElementById("friend5");
    var color = Friend.classList.contains("info-element");
    if (color == true){
        Friend.classList.remove("info-element");
        Friend.classList.add("white-element");
    }
    else {
        Friend.classList.remove("danger-element");
        Friend.classList.add("white-element");
    }
    return true;
}

function Justice6() {
    var Friend = document.getElementById("friend6");
    var color = Friend.classList.contains("info-element");
    if (color == true){
        Friend.classList.remove("info-element");
        Friend.classList.add("white-element");
    }
    else {
        Friend.classList.remove("danger-element");
        Friend.classList.add("white-element");
    }
    return true;
}

function Alljustice() {
    var Friend1 = document.getElementById("friend1");
    var Friend2 = document.getElementById("friend2");
    var Friend3 = document.getElementById("friend3");
    var Friend4 = document.getElementById("friend4");
    var Friend5 = document.getElementById("friend5");
    var Friend6 = document.getElementById("friend6");
    var color1 = Friend1.classList.contains("white-element");
    var color2 = Friend2.classList.contains("white-element");
    var color3 = Friend3.classList.contains("white-element");
    var color4 = Friend4.classList.contains("white-element");
    var color5 = Friend5.classList.contains("white-element");
    var color6 = Friend6.classList.contains("white-element");
    if(color1 == true){
        if(color2 == true){
            Friend2.classList.remove("white-element");
            Friend2.classList.add("info-element");
        }
        if(color3 == true){
            Friend3.classList.remove("white-element");
            Friend3.classList.add("info-element");
        }
        if(color4 == true){
            Friend4.classList.remove("white-element");
            Friend4.classList.add("info-element");
        }
        if(color5 == true){
            Friend5.classList.remove("white-element");
            Friend5.classList.add("info-element");
        }
        if(color6 == true){
            Friend6.classList.remove("white-element");
            Friend6.classList.add("info-element");
        }
    }
    if(color2 == true){
        if(color1 == true){
            Friend1.classList.remove("white-element");
            Friend1.classList.add("info-element");
        }
        if(color3 == true){
            Friend3.classList.remove("white-element");
            Friend3.classList.add("info-element");
        }
        if(color4 == true){
            Friend4.classList.remove("white-element");
            Friend4.classList.add("info-element");
        }
        if(color5 == true){
            Friend5.classList.remove("white-element");
            Friend5.classList.add("info-element");
        }
        if(color6 == true){
            Friend6.classList.remove("white-element");
            Friend6.classList.add("info-element");
        }
    }
    if(color3 == true){
        if(color1 == true){
            Friend1.classList.remove("white-element");
            Friend1.classList.add("info-element");
        }
        if(color2 == true){
            Friend2.classList.remove("white-element");
            Friend2.classList.add("info-element");
        }
        if(color4 == true){
            Friend4.classList.remove("white-element");
            Friend4.classList.add("info-element");
        }
        if(color5 == true){
            Friend5.classList.remove("white-element");
            Friend5.classList.add("info-element");
        }
        if(color6 == true){
            Friend6.classList.remove("white-element");
            Friend6.classList.add("info-element");
        }
    }
    if(color4 == true){
        if(color1 == true){
            Friend1.classList.remove("white-element");
            Friend1.classList.add("info-element");
        }
        if(color2 == true){
            Friend2.classList.remove("white-element");
            Friend2.classList.add("info-element");
        }
        if(color3 == true){
            Friend3.classList.remove("white-element");
            Friend3.classList.add("info-element");
        }
        if(color5 == true){
            Friend5.classList.remove("white-element");
            Friend5.classList.add("info-element");
        }
        if(color6 == true){
            Friend6.classList.remove("white-element");
            Friend6.classList.add("info-element");
        }
    }
    if(color5 == true){
        if(color1 == true){
            Friend1.classList.remove("white-element");
            Friend1.classList.add("info-element");
        }
        if(color2 == true){
            Friend2.classList.remove("white-element");
            Friend2.classList.add("info-element");
        }
        if(color3 == true){
            Friend3.classList.remove("white-element");
            Friend3.classList.add("info-element");
        }
        if(color4 == true){
            Friend4.classList.remove("white-element");
            Friend4.classList.add("info-element");
        }
        if(color6 == true){
            Friend6.classList.remove("white-element");
            Friend6.classList.add("info-element");
        }
    }
    if(color6 == true){
        if(color1 == true){
            Friend1.classList.remove("white-element");
            Friend1.classList.add("info-element");
        }
        if(color2 == true){
            Friend2.classList.remove("white-element");
            Friend2.classList.add("info-element");
        }
        if(color3 == true){
            Friend3.classList.remove("white-element");
            Friend3.classList.add("info-element");
        }
        if(color4 == true){
            Friend4.classList.remove("white-element");
            Friend4.classList.add("info-element");
        }
        if(color5 == true){
            Friend5.classList.remove("white-element");
            Friend5.classList.add("info-element");
        }
    }
}

function IsRecieve() {
    var Friend1 = document.getElementById("friend1");
    var Friend2 = document.getElementById("friend2");
    var Friend3 = document.getElementById("friend3");
    var Friend4 = document.getElementById("friend4");
    var Friend5 = document.getElementById("friend5");
    var Friend6 = document.getElementById("friend6");
    $(Friend1).getJSON("js/userinfo.json", function (data) {
        $.each(data, function (infoIndex, info) {
            strname = info["name"];
        });
    });
    if(strname != ""){
        Friend1.classList.remove("info-element");
        Friend1.classList.add("danger-element");
    }

    $(Friend2).getJSON("js/userinfo.json", function (data) {
        $.each(data, function (infoIndex, info) {
            strname = info["name"];
        });
    });
    if(strname != ""){
        Friend2.classList.remove("info-element");
        Friend2.classList.add("danger-element");
    }

    $(Friend3).getJSON("js/userinfo.json", function (data) {
        $.each(data, function (infoIndex, info) {
            strname = info["name"];
        });
    });
    if(strname != ""){
        Friend3.classList.remove("info-element");
        Friend3.classList.add("danger-element");
    }

    $(Friend4).getJSON("js/userinfo.json", function (data) {
        $.each(data, function (infoIndex, info) {
            strname = info["name"];
        });
    });
    if(strname != ""){
        Friend4.classList.remove("info-element");
        Friend4.classList.add("danger-element");
    }

    $(Friend5).getJSON("js/userinfo.json", function (data) {
        $.each(data, function (infoIndex, info) {
            strname = info["name"];
        });
    });
    if(strname != ""){
        Friend5.classList.remove("info-element");
        Friend5.classList.add("danger-element");
    }

    $(Friend6).getJSON("js/userinfo.json", function (data) {
        $.each(data, function (infoIndex, info) {
            strname = info["name"];
        });
    });
    if(strname != ""){
        Friend6.classList.remove("info-element");
        Friend6.classList.add("danger-element");
    }
    setTimeout("IsRecieve()",1000);
}