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
var txt_G=["YW1wZXLDrW1ldHJv","YmF0ZXLDrWE=","Ym9tYmlsbGE=","Y2FibGU=","Y29ubXV0YWRvcg==","ZGluYW1v","ZGlvZG8gbGVk","ZWxlY3Ryb2ltw6Fu","aW50ZXJydXB0b3I=","bW90b3I=","cGlsYQ==","cHVsc2Fkb3I=","cmVnbGV0YSBkZSBjb25leGnDs24=","cmVzaXN0ZW5jaWE=","cmVzaXN0ZW5jaWEgdmFyaWFibGU=","c2VsZWN0b3I=","c2lyZW5h","dGltYnJl","dm9sdMOtbWV0cm8=","enVtYmFkb3I=","ZnVlbnRlIGRlIGFsaW1lbnRhY2nDs24="];
var img_G=["","","","","","","","","","","","","","","","","","","","",""];
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
var dirMedia="17CT-Electricidad-Eso3-01-c_resources/media/"; var indexGame="0"; var tiAudio=false;
var wordsGame="MTdDVC1FbGVjdHJpY2lkYWQtRXNvMy0wMS1j"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var imaW=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var imaH=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var info=["","","","","","","","","","","","","","","","","","","","",""];
