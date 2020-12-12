var mymap = L.map('main_map').setView([3.4113833,-76.5626763], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', 
	{foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(mymap);


L.marker([3.4640528,-76.5094222], 16).addTo(mymap);
L.marker([3.4663576,-76.4938011], 16).addTo(mymap);
L.marker([3.4658626,-76.5058762], 16).addTo(mymap);







/*
$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title: bici.modelo}).addTo(mymap);
        })
    }
})

*/