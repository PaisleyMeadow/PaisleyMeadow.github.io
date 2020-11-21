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

//open resume
$("#resume-link").click(function(){
    window.open("images/resume2020.pdf", "_blank");
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