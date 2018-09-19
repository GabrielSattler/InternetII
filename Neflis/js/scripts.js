$("#Enviar").on("click", function(event){
    event.preventDefault();
    var movID = $("#movID").val();
    var movTitle = $("#movTitle").val();
    var movDesc = $("#movDesc").val();
    var movCast = $("#movCast").val();
    var movGender = $("#movGender").val();
    var movImage = $("#movImage").val();
    var movScore = $("#movScore").val();

    //if(movTitle != "" && movDesc != "" && movCast != "" && movGender != "" && movImage != "" && movScore != ""){
        sendData({
            title: movTitle,
            description:movDesc,
            score:movScore,
            poster:movImage,
            cast:movCast,
            gender:movGender,
        }).then(postSuccess, postError);
        function postSuccess(response){
                $("#Hide").html("<p>" + response.msg + "</p>");
                $("#Hide").show();
                $("#Hide").addClass("Success").removeClass("Error");
            }
        function postError(err){
                $("#Hide").html("<p>Necesitas llenar los campos</p>");
                $("#Hide").show();
                $("#Hide").addClass("Error").removeClass("Success");
        }
    //}
    return false;
})

function getAllFilms(){
    $.ajax({
        url:"http://192.168.1.132:3000/peliculas",
        method:"GET"
    }).then(getSuccess, getError);
    function getSuccess(response){
            Pelis.setPeliculas(response);
            Pelis.listAll();
        }
    function getError(err){
            $("#Mensaje1").html("<p>" + response.msg + "</p>");
            $("#Mensaje1").show();
            $("#Mensaje1").addClass("Error").removeClass("Success");
    }
}

var Pelis = {
    peliculas:[],

    setPeliculas:function(peliculas){
        this.peliculas = peliculas;
    },

    listAll:function(){
        for(var i = 0; i < this.peliculas.length; i++){
            $("#Contenido").append(this.assamble(this.peliculas[i]));
        }
    },

    listFocus:function(focus){
        $("#ContenedorFocus").html(this.assambleFocus(focus))
    },

    assamble:function(peli){
        return '<li class="Peli">' +
            '<div class="ItemPelicula">' +
                '<img class="Cartelera" src="' + peli.poster + '"/>' +
                '<p>' + peli.title + '</p>' +
                '<p>' + peli.description + '</p>' +
                '<p>' + peli.cast + '</p>' +
                '<p>' + peli.gender + '</p>' +
                '<p>' + peli.score + '</p>' +
            '</div>' +
        '</li>'
    },

    assambleFocus:function(focus){
        return '<div id="PosterFocus">' +
                    '<img src="' + focus.poster + '"/>' +
                '</div>' +
                '<div id="ContenidoFocus">' +
                    '<h3 id="TituloFocus">' + focus.title + '</h3>' +
                    '<p>' + focus.description + '</p>' +
                    '<p>' + focus.cast + '</p>' +
                    '<p>' + focus.gender + '</p>' +
                    '<p>' + focus.score + '</p>' +
                '</div>'
    },

    clear:function(){
        $("#Contenido").html("");
    },
}

function sendData(params){
    return $.ajax({
           method:"POST",
           url:"http://192.168.1.123:3000/peliculas",
           data: params
     });
}

$(function(){
    getAllFilms();
})