$(document).ready(function(){

    $("#button").click(function() {

        var text = $("#text").val();
        var language= $("#language").val();
        console.log(text);
        console.log(language);
        $.ajax({
            url: "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190409T210402Z.c322f68b3085374e.83b33b5ba45ae2e02c224e2073cc58cc53c271b6"
                + "&text=" + text + "&lang=" + language,
            dataType: "jsonp",
            method: "GET",
            success: myCallBack

        });

        function myCallBack(data){
            console.log(data);
            //$("#translation").append(data.text[0]+"<br>");
            if(language && text){
                $("#translation").append(data.text[0]+"<br>");
            } else {
                $("#translation").append("Please enter all required fields" + "<br>");
            }
        }

    });

});

