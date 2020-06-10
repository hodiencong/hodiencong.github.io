function changeLanguage(language){
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
            var resData = JSON.parse(this.responseText);
            setLanguage(resData);
        }
    };
    xmlhttp.open("GET",  "././php/switch-language.php?language="+language, true);
    xmlhttp.send();
}

function setLanguage(data){
    for(var i = 0;i < data.length;i++){
        let tagId = data[i][0];
        let tagValue = data[i][1];
        $(`#${tagId}`).html(tagValue);
    }
}

changeLanguage("en")