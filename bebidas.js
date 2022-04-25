function mostrarImagen(indice){
    if(indice==1){
        imgVista.src = "../img/frescoFrutas.jpeg";
        document.getElementById("infB").innerHTML = "• Batidos &nbsp &nbsp • Fresco de Frutas  &nbsp &nbsp • Frescos Naturales &nbsp &nbsp • Jugos";
    }
    else{
        if (indice==2) {
            imgVista.src = "../img/aguaSapo.jfif";
            document.getElementById("infB").innerHTML = "• Agua de Sapo";
        } else {
            if (indice==3) {
                imgVista.src = "../img/coca.jpg";
                document.getElementById("infB").innerHTML = "• Gaseosas";
            } else {
                imgVista.src = "../img/cafe.jfif";
                document.getElementById("infB").innerHTML = "• Té &nbsp &nbsp • Café &nbsp &nbsp • Chocolate Caliente";
            }
        }
    }
}