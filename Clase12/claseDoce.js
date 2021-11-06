//jQuery tiene eventos similares al addEventListener.

$(document).ready(function(){
    $("#boton").click(function(){
        alert("hola");
    });
});
//Detecta cuando el DOM está listo para usarse, cuando fue interpretado por el navegador. El DOM se carga antes que la página. Si el script estuviera antes que el html no podría 
//seleccionar los elementos. No espera que se carguen imagenes y recursos externos (como load). Detecta cuando el DOM está cargado en el browser para
//efectucambios. Puede haber más de un ready.

$(window).on("load" , function (){
    let tiempo = new Date();
    console.log("load" + tiempo);
});
$(document).ready(function(){
    let tiempo = new Date();
    console.log("ready" + tiempo);
});

//.hide , .show , .toggle , .hover(es dos eventos, mouseenter y mouseLeave; varios eventos de jQuery funcionan así)
//Metodo .on: similar a addEventListener $().on("evento" , función);
//Evento change() u on("change" , función(se le puede pasar evento como parametro y utilizarlo como objeto DOM));
//Evento submit()
//Método trigger("evento") ejecuta evento de otro elemento