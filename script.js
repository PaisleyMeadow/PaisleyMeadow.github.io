$(document).ready(function(){

$("#home-link").click(function(){ 
    switchCards("#home", this);
});
$("#about-link").click(function(){ 
    switchCards("#about", this);
});
$("#contact-link").click(function(){ 
    switchCards("#contact", this);
});
$(".contact-inline").click(function(){
    switchCards("#contact", "#contact-link");
});
$("#resume-link").click(function(){ 
    switchCards("#resume", this);
});

function switchCards(id, tab){
    if(!$(id).is(":visible")){
        $("#right-column").children().each(function(){
            if($(this).is(":visible")){
                $(this).fadeOut(0);
            }
        });

        $(id).fadeIn();

        //persistent nav

        $(".side-links").removeClass("active-tab");
        $(tab).addClass("active-tab");
    }
}

});