var Table = {
    data:[],

    setData:function(Data){
        this.data = Data;
    },

    clear:function(){
        $("#table-body").html("");
    },

    listAll:function(){
        this.clear();
        for(var i = 0; i < this.data.length; i++){
            $("#table-body").append(Table.assamble(this.data[i]));
        }
    },

    assamble:function(Data){
        return '<div class="row">' +
                '<span class="col-2">' + '</span>' +
                '<span class="col-2">' + Data.brand + '</span>' +
                '<span class="col-2">' + Data.location + '</span>' +
                '<span class="col-2">' + Data.lunch + '</span>' +
                '<span class="col-2">' + Data.price + '</span>' +
                '<span class="col-2">' + '</span>' +
                '<span class="description col-12">' + "" + '</span>' +
            '</div>';
    },

    filtroBrand:function(){
        Table.clear();
        var input = document.getElementById("BrandInput").value;
        if(input == ""){
            this.listAll();
        }
        for(var i = 0; i < this.data.length; i++){
            if(this.data[i].brand == input){
                $("#table-body").append(Table.assamble(this.data[i]));
            }
        }
    },

    filtroLocation:function(){
        Table.clear();
        var input = document.getElementById("LocationInput").value;
        if(input == ""){
            this.listAll();
        }
        for(var i = 0; i < this.data.length; i++){
            if(this.data[i].location == input){
                $("#table-body").append(Table.assamble(this.data[i]));
            }
        }
    },

    filtroLaunch:function(){
        Table.clear();
        var input = document.getElementById("LaunchInput").value;
        if(input == ""){
            this.listAll();
        }
        for(var i = 0; i < this.data.length; i++){
            if(this.data[i].lunch == input){
                $("#table-body").append(Table.assamble(this.data[i]));
            }
        }
    },

    filtroPrice:function(){
        Table.clear();
        var input = document.getElementById("PriceInput").value;
        if(input == ""){
            this.listAll();
        }
        for(var i = 0; i < this.data.length; i++){
            if(this.data[i].price == input){
                $("#table-body").append(Table.assamble(this.data[i]));
            }
        }
    },
}

$(function() {
    Table.setData(elementsList);
    Table.listAll();
});