$(document).ready(function(){
    $('#login').click(function(){
//        e.preventDefault();
        var id = $('#id').val();
        var pw = $('#pw').val();
        alert(id);
        var param = {
            'nickname' : id,
            'm_password' : pw
        };
        console.log(typeof param);
        console.log(JSON.stringify(param));
        var test= JSON.stringify(param);
        console.log(typeof test);
        $.ajax({
            type : 'post',
            url : 'http://39.127.7.48:8080/app/mlogin',
            data : test,
            contentType : "application/json; charset=UTF-8",
            success : function(result){

                alert(result.signal);
                if(result.signal == "success"){
                    console.log(result.json);



                    sessionStorage.setItem("member", result.json);
                    var json2 = JSON.parse(result.json);
                    var temp = json2.nickname;
                    alert(temp+"123456789");
                    window.location.href="index.html";
                }else
                    window.location.reload();
                /*if(result=='ok'){
                window.location= 'index.html';
                }else{
                    window.alert('error 발생')
                   window.location.reload();
                }*/
            },
            error : function(request){
                console.log(request);
                console.log(request.responseText);
                $('#loginForm').parent().html(request.responseText);
            }
        })
    })
    $('#join').click(function() {
        window.location.href="join.html";
    });

})