//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=60; timeIni=60; timeBon=20;
var successes=0; successesMax=12; attempts=0; attemptsMax=99;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=1;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar / Començar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Correcto! / Correcte!"; messageTime=""; messageError="Corrige los errores y pulsa el botón [?] / Corregix els errors i polsa el botó [?]"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0"],["0","0","0","0"],["0","0","0","0"]]; var imaSel=0; texSel=0;
var original="03GP-Electricidad-Eso3-03-c_resources/media/original.jpg";
var board=[["03GP-Electricidad-Eso3-03-c_resources/media/cGllY2UxXzE=.jpg","03GP-Electricidad-Eso3-03-c_resources/media/cGllY2UyXzE=.jpg","03GP-Electricidad-Eso3-03-c_resources/media/cGllY2UzXzE=.jpg","03GP-Electricidad-Eso3-03-c_resources/media/cGllY2U0XzE=.jpg"],["03GP-Electricidad-Eso3-03-c_resources/media/cGllY2UxXzI=.jpg","03GP-Electricidad-Eso3-03-c_resources/media/cGllY2UyXzI=.jpg","03GP-Electricidad-Eso3-03-c_resources/media/cGllY2UzXzI=.jpg","03GP-Electricidad-Eso3-03-c_resources/media/cGllY2U0XzI=.jpg"],["03GP-Electricidad-Eso3-03-c_resources/media/cGllY2UxXzM=.jpg","03GP-Electricidad-Eso3-03-c_resources/media/cGllY2UyXzM=.jpg","03GP-Electricidad-Eso3-03-c_resources/media/cGllY2UzXzM=.jpg","03GP-Electricidad-Eso3-03-c_resources/media/cGllY2U0XzM=.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="MDNHUC1FbGVjdHJpY2lkYWQtRXNvMy0wMy1j"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
