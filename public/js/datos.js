var $buttonTitu = document.getElementById('idtitulos');
var $button76mic = document.getElementById('termo76');
var $buttonNylon = document.getElementById('nylon');
var $buttonEvoh = document.getElementById('evoh');
var $buttonCelulosa = document.getElementById('celulosa');
var $buttonSala = document.getElementById('salames');
var $buttonPolyami = document.getElementById('polyamida');
var $buttonCerdo1 = document.getElementById('cerdo1');
var $buttonCerdo2 = document.getElementById('cerdo2');
var $buttonCordero = document.getElementById('cordero');
var $buttonColag = document.getElementById('colageno');

$buttonTitu.addEventListener('click', termo);
$button76mic.addEventListener('click', termo76);
$buttonNylon.addEventListener('click', poly);
$buttonEvoh.addEventListener('click', evo);
$buttonCelulosa.addEventListener('click', celu);
$buttonSala.addEventListener('click', sal);
$buttonPolyami.addEventListener('click', polyam);
$buttonCerdo1.addEventListener('click', pork1);
$buttonCerdo2.addEventListener('click', pork2);
$buttonCordero.addEventListener('click', cord);
$buttonColag.addEventListener('click', cola);


function Estructura(t,i)
{
	this.titulo = t;
	this.infof = i;
}


function termo(){
	var termoencogibleT = new Estructura("BOLSAS TERMOENCOGIBLES (PVDC) 56 MICRONES", "SB15 CARNES PROCESADAS (ALTA BARRERA) <br \> SB15 CARNES FRESCAS (ALTA BARRERA) <br \> SB 3000  PAVOS Y POLLOS FRESCO Y COGELADOS (SIN BARRERA) <br \> SB100 QUESOS FRESCO  (MEDIA BARRERA) <br \> IMPRESIÓN HASTA 8 COLORES X LADO <br \> SELLO REDONDO <br \> VARIOS COLORES");

	titulazo.innerHTML = termoencogibleT.titulo;
	variantes.innerHTML = termoencogibleT.infof;
}

function termo76(){
	var b76mic = new Estructura("BOLSAS TERMOENCOGIBLES (PVDC) 76 MICRONES", "SB15 PRO TITE CORTES CON HUESO (ALTA BARRERA)");
	titulazo.innerHTML = b76mic.titulo;
	variantes.innerHTML = b76mic.infof;
}

function poly(){
	var npoly = new Estructura("BOLSAS NYLON POLY (TRES SELLOS)","BOLSAS DESDE 50  - 120 MICRONES");
	titulazo.innerHTML = npoly.titulo;
	variantes.innerHTML = npoly.infof;
}

function evo(){
	var evoh = new Estructura("PELICULA EVOH","BOLSA UHT (LECHES) <br \> MATERIAL LARGA VIDA");
	titulazo.innerHTML = evoh.titulo;
	variantes.innerHTML = evoh.infof;
}
function celu(){
	var celulosa = new Estructura("TRIPA CELULOSA (SALCHICHAS) WIENIEPAK","CALIBRES DESDE 13 - 40 <br \> REGULAR, IMPRESA, FACIL PELADO Y GRILL SMASH");
	titulazo.innerHTML = celulosa.titulo;
	variantes.innerHTML = celulosa.infof;
}

function sal(){
	var salames = new Estructura("TRIPA FIBROSA (SALAMES)","CALIBRE DESDE 28 - 252 DRE <br \> FACIL PELADO, REGULAR Y ALTA ADEHESION <br \> VARIOS COLORES");
	titulazo.innerHTML = salames.titulo;
	variantes.innerHTML = salames.infof;
}

function polyam(){
	var polyamida = new Estructura("TRIPA POLYAMIDA (JAMONES Y MORTADELAS) NOVA","CALIBRES DESDE 51 - 305 ANCHO PLANO <br \> CALIBRES DESDE 34 - 205 DRE <br \> VARIOS COLORES <br \> DRE DIAMETRO RECOMENDADO EMBUTIDO");
	titulazo.innerHTML = polyamida.titulo;
	variantes.innerHTML = polyamida.infof;
}

function pork1(){
	var cerdo1 = new Estructura("MADEJAS DE 10, 15 Y 22 PUNTAS","30-32 <br \> 32-35 <br \> 35-37 <br \> 37-40");
	titulazo.innerHTML = cerdo1.titulo;
	variantes.innerHTML = cerdo1.infof;
}

function pork2(){
	var cerdo2 = new Estructura("TUBING  DE  7, 10, 12 PUNTAS","32-35 <br \> 35-39 <br \> 40+");
	titulazo.innerHTML = cerdo2.titulo;
	variantes.innerHTML = cerdo2.infof;
}

function cord(){
	var cordero = new Estructura("MADEJAS","14-16 <br \> 16-18 <br \> 18-20 <br \> 20-22 <br \> 22-24 <br \> 24-26");
	titulazo.innerHTML = cordero.titulo;
	variantes.innerHTML = cordero.infof;
}

function cola(){
	var colageno = new Estructura("TRIPA COLAGENO COMESTIBLE","CALIBRE DESDE 17- 38 <br \> VARIOS COLORES");
	titulazo.innerHTML = colageno.titulo;
	variantes.innerHTML = colageno.infof;
}