//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=99;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="correcto"; messageTime=""; messageError="hay errores, corrígelos"; messageErrorG="hay errores, corrígelos"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var d=[[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,1]];
var vCell=[["0","0","0","0","0","0","0","0"],["0","2","2","2","2","2","2","2"],["0","2","2","2","2","2","2","2"],["0","2","2","2","2","2","2","2"],["0","2","2","2","2","2","2","2"]];
var a0Cell=[["Y29tcG9uZW50ZQ==","cGlsYQ==","Y29ubXV0YWRvcg==","enVtYmFkb3I=","cHVsc2Fkb3I=","YW1wZXLDrW1ldHJv","YmF0ZXLDrWE=","bGVk"],["Z2VuZXJhZG9y","MQ==","MA==","MA==","MA==","MA==","MQ==","MA=="],["ZWxlbWVudG8gZGUgbWFuaW9icmE=","MA==","MQ==","MA==","MQ==","MA==","MA==","MA=="],["cmVjZXB0b3I=","MA==","MA==","MQ==","MA==","MA==","MA==","MQ=="],["YXBhcmF0byBkZSBtZWRpZGE=","MA==","MA==","MA==","MA==","MQ==","MA==","MA=="]];
var c=[[10,4,10,8,8,11,7,3],[9,1,1,1,1,1,1,1],[20,1,1,1,1,1,1,1],[8,1,1,1,1,1,1,1],[17,1,1,1,1,1,1,1]];
var c1=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,8,11,11,0,0,0,0],[0,7,11,16,0,0,0,0],[0,0,0,0,0,0,0,0]];
var c2=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,10,8,8,0,0,0,0],[0,7,5,19,0,0,0,0],[0,0,0,0,0,0,0,0]];
var c3=[[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,8,10,8,0,0,0,0],[0,12,8,16,0,0,0,0],[0,0,0,0,0,0,0,0]];
var a1Cell=[["Y29tcG9uZW50ZQ==","cGlsYQ==","Y29ubXV0YWRvcg==","enVtYmFkb3I=","cHVsc2Fkb3I=","YW1wZXLDrW1ldHJv","YmF0ZXLDrWE=","bGVk"],["Z2VuZXJhZG9y","MQ==","MA==","MA==","MA==","MA==","MQ==","MA=="],["ZWxlbWVudG8gZGUgbWFuaW9icmE=","cHVsc2Fkb3I=","aW50ZXJydXB0b3I=","aW50ZXJydXB0b3I=","MQ==","MA==","MA==","MA=="],["cmVjZXB0b3I=","bW90b3Jlcw==","cmVzaXN0ZW5jaWE=","Ym9tYmlsbGEgeSBtb3Rvcg==","MA==","MA==","MA==","MQ=="],["YXBhcmF0byBkZSBtZWRpZGE=","MA==","MA==","MA==","MA==","MQ==","MA==","MA=="]];
var a2Cell=[["Y29tcG9uZW50ZQ==","cGlsYQ==","Y29ubXV0YWRvcg==","enVtYmFkb3I=","cHVsc2Fkb3I=","YW1wZXLDrW1ldHJv","YmF0ZXLDrWE=","bGVk"],["Z2VuZXJhZG9y","MQ==","MA==","MA==","MA==","MA==","MQ==","MA=="],["ZWxlbWVudG8gZGUgbWFuaW9icmE=","Y29ubXV0YWRvcg==","c2VsZWN0b3I=","cHVsc2Fkb3I=","MQ==","MA==","MA==","MA=="],["cmVjZXB0b3I=","dGltYnJlcw==","bW90b3I=","bW90b3IgeSByZXNpc3RlbmNpYQ==","MA==","MA==","MA==","MQ=="],["YXBhcmF0byBkZSBtZWRpZGE=","MA==","MA==","MA==","MA==","MQ==","MA==","MA=="]];
var a3Cell=[["Y29tcG9uZW50ZQ==","cGlsYQ==","Y29ubXV0YWRvcg==","enVtYmFkb3I=","cHVsc2Fkb3I=","YW1wZXLDrW1ldHJv","YmF0ZXLDrWE=","bGVk"],["Z2VuZXJhZG9y","MQ==","MA==","MA==","MA==","MA==","MQ==","MA=="],["ZWxlbWVudG8gZGUgbWFuaW9icmE=","c2VsZWN0b3I=","Y29ubXV0YWRvcg==","c2VsZWN0b3I=","MQ==","MA==","MA==","MA=="],["cmVjZXB0b3I=","cmVzaXN0ZW5jaWFz","Ym9tYmlsbGE=","bW90b3IgeSB6dW1iYWRvcg==","MA==","MA==","MA==","MQ=="],["YXBhcmF0byBkZSBtZWRpZGE=","MA==","MA==","MA==","MA==","MQ==","MA==","MA=="]];
var wordsGame="MTZDVC1FbGVjdHJpY2lkYWQtRXNvMy0wMy1j"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=5; var rows=8;var showC=true;
