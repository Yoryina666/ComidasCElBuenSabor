$(function() {
    /*Ocultar descripciones al abrir la ventana*/
    $(document).ready(function () {
        $(".descS").hide();
    });
    /*Mostrar descripción*/ 
    document.getElementById("s1").addEventListener("click", () => {
        $("#d1").slideDown();
        $("#s1").css({"color": "#90EC6E"});
    });
    document.getElementById("s2").addEventListener("click", () => {
        $("#d2").slideDown();
        $("#s2").css({"color": "#90EC6E"});
    });
    document.getElementById("s3").addEventListener("click", () => {
        $("#d3").slideDown();
        $("#s3").css({"color": "#ffc300"});
    });
    document.getElementById("s4").addEventListener("click", () => {
        $("#d4").slideDown();
        $("#s4").css({"color": "#ffc300"});
    });
    document.getElementById("s5").addEventListener("click", () => {
        $("#d5").slideDown();
        $("#s5").css({"color": "#e01b09"});
    });
    document.getElementById("s6").addEventListener("click", () => {
        $("#d6").slideDown();
        $("#s6").css({"color": "#e01b09"});
    });
       
    /*Ocultar descripción*/
    document.getElementById("s1").addEventListener("mouseleave", () => {
        $("#d1").slideUp();
        $(".servicio").css({"color": "rgb(233, 232, 232)"});
    });
    document.getElementById("s2").addEventListener("mouseleave", () => {
        $("#d2").slideUp();
        $(".servicio").css({"color": "rgb(233, 232, 232)"});
    });
    document.getElementById("s3").addEventListener("mouseleave", () => {
        $("#d3").slideUp();
        $(".servicio").css({"color": "rgb(233, 232, 232)"});
    });
    document.getElementById("s4").addEventListener("mouseleave", () => {
        $("#d4").slideUp();
        $(".servicio").css({"color": "rgb(233, 232, 232)"});
    });
    document.getElementById("s5").addEventListener("mouseleave", () => {
        $("#d5").slideUp();
        $(".servicio").css({"color": "rgb(233, 232, 232)"});
    });
    document.getElementById("s6").addEventListener("mouseleave", () => {
        $("#d6").slideUp();
        $(".servicio").css({"color": "rgb(233, 232, 232)"});
    });
});