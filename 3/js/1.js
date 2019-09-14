$(document).ready(function(){
    $("#a").click(function(){
        $(this).hide();
    });
    $("button").click(function(){
        $("#b").toggle();
    });
});