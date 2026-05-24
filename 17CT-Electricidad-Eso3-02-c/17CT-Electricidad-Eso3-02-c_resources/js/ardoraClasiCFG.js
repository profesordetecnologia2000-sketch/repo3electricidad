//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=21; attempts=0; attemptsMax=99;
var score=0; scoreMax=21; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="¡Correcto!"; messageTime=""; messageError="¡Incorrecto!, corrige el error."; messageErrorG="¡Incorrecto!, corrige el error."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var txt_G=["","","","","","","","","","","","","","","","","","","","",""];
var img_G=["i_amperimetro1.jpg","i_bateria1.jpg","i_bombilla1.jpg","i_cable1.jpg","i_conmutador1.jpg","i_dinamo1.jpg","i_diodo_led1.jpg","i_electroiman1.jpg","i_interruptor1.jpg","i_motor1.jpg","i_pila1.jpg","i_pulsador1.jpg","i_regletaDeConexion1.jpg","i_resistencia1.jpg","i_resistenciaVariable1.jpg","i_selector1.jpg","i_sirena1.jpg","i_timbre1.jpg","i_voltimetro1.jpg","i_zumbador1.jpg","i_fuenteDeAlimentacion1.jpg"];
var mp3_G=["","","","","","","","","","","","","","","","","","","","",""];
var ogg_G=["","","","","","","","","","","","","","","","","","","","",""];
var n_G=["NQ==","MQ==","NA==","Mg==","Mw==","MQ==","NA==","NA==","Mw==","NA==","MQ==","Mw==","Mg==","NA==","NA==","Mw==","NA==","NA==","NQ==","NA==","MQ=="];
var e_G=["","","","","","","","","","","","","","","","","","","","",""];
var mp4_G=["","","","","","","","","","","","","","","","","","","","",""];
var ogv_G=["","","","","","","","","","","","","","","","","","","","",""];
var alt_G=["","","","","","","","","","","","","","","","","","","","",""];
var txtGr=["generador","conductor","elemento de maniobra","receptor","aparato de medida"];
var imgGr=["","","","",""];
var mp3Gr=["","","","",""];
var oggGr=["","","","",""];
var altGr=["","","","",""];
var ram_G=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var messageErrorG="¡Incorrecto!, corrige el error.";
var dirMedia="17CT-Electricidad-Eso3-02-c_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="MTdDVC1FbGVjdHJpY2lkYWQtRXNvMy0wMi1j"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var imaW=["98","106","81","75","80","142","96","86","82","71","70","82","123","133","100","97","105","57","132","142","127"];
var imaH=["100","100","100","100","100","100","100","100","100","99","99","100","100","100","100","100","100","100","100","100","100"];
var info=["","","","","","","","","","","","","","","","","","","","",""];
