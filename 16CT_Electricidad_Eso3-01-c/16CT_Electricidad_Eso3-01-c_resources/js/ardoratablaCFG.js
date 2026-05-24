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
var d=[[0,0,0,0],[0,1,1,1],[0,1,1,1],[0,1,1,1]];
var vCell=[["0","5","5","5"],["0","3","3","3"],["0","3","3","3"],["0","3","3","3"]];
var a0Cell=[["Y2lyY3VpdG8=","Y2lyY3VpdG8tMS5qcGc=","Y2lyY3VpdG8tMi5qcGc=","Y2lyY3VpdG8tMy5qcGc="],["dm9sdGFqZSBwaWxh","NCw1IFY=","OSBW","OSBW"],["ZWxlbWVudG8gZGUgbWFuaW9icmE=","aW50ZXJydXB0b3I=","cHVsc2Fkb3I=","Y29ubXV0YWRvcg=="],["cmVjZXB0b3I=","Ym9tYmlsbGFz","dGltYnJl","Ym9tYmlsbGEgeSB0aW1icmU="]];
var c=[[8,14,14,14],[12,5,3,3],[20,11,8,10],[8,9,6,17]];
var c1=[[0,0,0,0],[0,3,5,3],[0,8,11,11],[0,7,11,16]];
var c2=[[0,0,0,0],[0,5,5,5],[0,10,8,8],[0,7,5,19]];
var c3=[[0,0,0,0],[0,3,3,5],[0,8,10,8],[0,12,8,16]];
var a1Cell=[["Y2lyY3VpdG8=","Y2lyY3VpdG8tMS5qcGc=","Y2lyY3VpdG8tMi5qcGc=","Y2lyY3VpdG8tMy5qcGc="],["dm9sdGFqZSBwaWxh","NSBW","MSw1IFY=","NSBW"],["ZWxlbWVudG8gZGUgbWFuaW9icmE=","cHVsc2Fkb3I=","aW50ZXJydXB0b3I=","aW50ZXJydXB0b3I="],["cmVjZXB0b3I=","bW90b3Jlcw==","cmVzaXN0ZW5jaWE=","Ym9tYmlsbGEgeSBtb3Rvcg=="]];
var a2Cell=[["Y2lyY3VpdG8=","Y2lyY3VpdG8tMS5qcGc=","Y2lyY3VpdG8tMi5qcGc=","Y2lyY3VpdG8tMy5qcGc="],["dm9sdGFqZSBwaWxh","MSw1IFY=","NCw1IFY=","MSw1IFY="],["ZWxlbWVudG8gZGUgbWFuaW9icmE=","Y29ubXV0YWRvcg==","c2VsZWN0b3I=","cHVsc2Fkb3I="],["cmVjZXB0b3I=","dGltYnJlcw==","bW90b3I=","bW90b3IgeSByZXNpc3RlbmNpYQ=="]];
var a3Cell=[["Y2lyY3VpdG8=","Y2lyY3VpdG8tMS5qcGc=","Y2lyY3VpdG8tMi5qcGc=","Y2lyY3VpdG8tMy5qcGc="],["dm9sdGFqZSBwaWxh","OSBW","OSBW","NCw1IFY="],["ZWxlbWVudG8gZGUgbWFuaW9icmE=","c2VsZWN0b3I=","Y29ubXV0YWRvcg==","c2VsZWN0b3I="],["cmVjZXB0b3I=","cmVzaXN0ZW5jaWFz","Ym9tYmlsbGE=","bW90b3IgeSB6dW1iYWRvcg=="]];
var wordsGame="MTZDVF9FbGVjdHJpY2lkYWRfRXNvMy0wMS1j"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=4; var rows=4;var showC=true;
