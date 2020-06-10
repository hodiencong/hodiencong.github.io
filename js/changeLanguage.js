function changeLanguage(language){
    
    // var xmlhttp = new XMLHttpRequest();
    // xmlhttp.onreadystatechange = function() {
    // if (this.readyState == 4 && this.status == 200) {
    //         var resData = JSON.parse(this.responseText);
    //         setLanguage(resData);
    //     }
    // };
    // xmlhttp.open("GET",  "././php/switch-language.php?language="+language, true);
    // xmlhttp.send();

    $(document).ready(function() {
        $.ajax({
            type: "GET",
            url: "language.csv",
            dataType: "text",
            success: function(data) {processData(data,language);}
         });
    });
    
}

function processData(allText, language) {

    var allTextLines = allText.split(/\r\n|\n/);

    for(var i = 0;i < allTextLines.length;i++){
        let entities = allTextLines[i];
        let rowData = entities.split(",");

        let tagId = rowData[0];
        let tagValue = rowData[language];
        $(`#${tagId}`).html(tagValue);
    }
    
}

function setLanguage(data){
    for(var i = 0;i < data.length;i++){
        let tagId = data[i][0];
        let tagValue = data[i][1];
        $(`#${tagId}`).html(tagValue);
    }
}

changeLanguage(2)