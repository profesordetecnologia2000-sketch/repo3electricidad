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
var d=[[0,0,0,0,0],[0,1,1,1,1],[0,1,1,1,1],[0,1,1,1,1]];
var vCell=[["0","5","5","5","5"],["0","3","3","3","3"],["0","3","3","3","3"],["0","3","3","3","3"]];
var a0Cell=[["Y2lyY3VpdG8=","Y2lyY3VpdG8xLmpwZw==","Y2lyY3VpdG8yLmpwZw==","Y2lyY3VpdG8zLmpwZw==","Y2lyY3VpdG80LmpwZw=="],["Ym9tYmlsbGEgMQ==","YXBhZ2FkYQ==","YXBhZ2FkYQ==","ZW5jZW5kaWRh","YXBhZ2FkYQ=="],["Ym9tYmlsbGEgMg==","ZW5jZW5kaWRh","YXBhZ2FkYQ==","ZW5jZW5kaWRh","YXBhZ2FkYQ=="],["Ym9tYmlsbGEgMw==","ZW5jZW5kaWRh","ZW5jZW5kaWRh","ZW5jZW5kaWRh","ZW5jZW5kaWRh"]];
var c=[[8,13,13,13,13],[10,7,7,9,7],[10,9,7,9,7],[10,9,9,9,9]];
var c1=[[0,0,0,0,0],[0,9,9,7,9],[0,7,9,7,9],[0,7,7,7,7]];
var c2=[[0,0,0,0,0],[0,13,13,13,13],[0,13,13,13,13],[0,13,13,13,13]];
var c3=[[0,0,0,0,0],[0,8,8,11,8],[0,8,8,8,8],[0,8,11,11,11]];
var a1Cell=[["Y2lyY3VpdG8=","Y2lyY3VpdG8xLmpwZw==","Y2lyY3VpdG8yLmpwZw==","Y2lyY3VpdG8zLmpwZw==","Y2lyY3VpdG80LmpwZw=="],["Ym9tYmlsbGEgMQ==","ZW5jZW5kaWRh","ZW5jZW5kaWRh","YXBhZ2FkYQ==","ZW5jZW5kaWRh"],["Ym9tYmlsbGEgMg==","YXBhZ2FkYQ==","ZW5jZW5kaWRh","YXBhZ2FkYQ==","ZW5jZW5kaWRh"],["Ym9tYmlsbGEgMw==","YXBhZ2FkYQ==","YXBhZ2FkYQ==","YXBhZ2FkYQ==","YXBhZ2FkYQ=="]];
var a2Cell=[["Y2lyY3VpdG8=","Y2lyY3VpdG8xLmpwZw==","Y2lyY3VpdG8yLmpwZw==","Y2lyY3VpdG8zLmpwZw==","Y2lyY3VpdG80LmpwZw=="],["Ym9tYmlsbGEgMQ==","bWFsIGNvbmVjdGFkYQ==","bWFsIGNvbmVjdGFkYQ==","bWFsIGNvbmVjdGFkYQ==","bWFsIGNvbmVjdGFkYQ=="],["Ym9tYmlsbGEgMg==","bWFsIGNvbmVjdGFkYQ==","bWFsIGNvbmVjdGFkYQ==","bWFsIGNvbmVjdGFkYQ==","bWFsIGNvbmVjdGFkYQ=="],["Ym9tYmlsbGEgMw==","bWFsIGNvbmVjdGFkYQ==","bWFsIGNvbmVjdGFkYQ==","bWFsIGNvbmVjdGFkYQ==","bWFsIGNvbmVjdGFkYQ=="]];
var a3Cell=[["Y2lyY3VpdG8=","Y2lyY3VpdG8xLmpwZw==","Y2lyY3VpdG8yLmpwZw==","Y2lyY3VpdG8zLmpwZw==","Y2lyY3VpdG80LmpwZw=="],["Ym9tYmlsbGEgMQ==","cGFycGFkZWE=","c2UgZnVuZGU=","bm8gZnVuY2lvbmE=","c2UgZnVuZGU="],["Ym9tYmlsbGEgMg==","cGFycGFkZWE=","cGFycGFkZWE=","c2UgZnVuZGU=","c2UgZnVuZGU="],["Ym9tYmlsbGEgMw==","c2UgZnVuZGU=","bm8gZnVuY2lvbmE=","bm8gZnVuY2lvbmE=","bm8gZnVuY2lvbmE="]];
var wordsGame="MTZDVC1FbGVjdHJpY2lkYWQtRXNvMy0wNC1j"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=4; var rows=5;var showC=true;
