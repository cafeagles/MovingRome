function getPompeyData(pompeyData)
{
	var pompeyData = [null // 01/08/49
	,null
	,null // Rubicon 01/10/49 BC
	,null 
	,null 
	,null 
	,null 
	,null 
	,null  
	,null 
	,null 
	,null 
	,null 
	,null
	,null
	,null 
	,null 
	,null 
	,null 
	,null 
	,null 
	,null 
	,null  
	,null 
	,null 
	,null 
	,null 
	,null
	,null
	,null 
	,"Pompey and the senate flea from Rome. Leaving it entirely at the mercy of Ceasar." 
	,"Pompey and the senate flea from Rome. Leaving it entirely at the mercy of Ceasar." 
	,"Pompey and the senate flea from Rome. Leaving it entirely at the mercy of Ceasar." 
	,null 
	,null 
	,null 
	,null 
	,null
	,null
	,null
	,null
	,null 
	,null 
	,null 
	,null 
	,null 
	,null  
	,null 
	,null 
	,null 
	,null 
	,null
	,null
	,null 
	,null 
	,null 
	,null 
	,null 
	,null 
	,null 
	,null  
	,null 
	,null 
	,null 
	,null 
	,null
	,null
	,null 
	,null 
	,null 
	,null 
	,null 
	,null
	,null 
	,null 
	,null 
	,null 
	,null 
	,null  
	,"In March Pompey and the senate arrive in Brindisi" 
	,null 
	,null 
	,null 
	,null
	,null
	,null 
	,null 
	,null 
	,null 
	,null
	,null 
	,null 
	,null 
	,null 
	,null
	,null 
	,null 
	,null 
	,null
	,null 
	,"Pompey arrives safely in Greece." /*last day  04/17/49 BC*/]
}








function getCeasarData(ceasarData)
{
var ceasarData = [null // 01/08/49
,null
,"On January 10th Ceasar and his legions cors the Rubicon headed for Rome." // Rubicon 01/10/49 BC
,null 
,null 
,null 
,null 
,null 
,null  
,null 
,null 
,null 
,null 
,null
,null
,null 
,null 
,null 
,null 
,null 
,null 
,null 
,null  
,null 
,null 
,null 
,null 
,null
,null
,null 
,null 
,null 
,null 
,null 
,null 
,null 
,null 
,null
,null
,null
,null
,null 
,null 
,null 
,null 
,null 
,"Ceasar arrives in Rome to find it abandoned by Pompey and the senate.*"  
,"Ceasar arrives in Rome to find it abandoned by Pompey and the senate.*" 
,"Ceasar arrives in Rome to find it abandoned by Pompey and the senate.*" 
,"Ceasar arrives in Rome to find it abandoned by Pompey and the senate.*" 
,null 
,null
,null
,null 
,null 
,"Ceasar pursues Pompey and the fleaing senate.*" 
,"Ceasar pursues Pompey and the fleaing senate.*" 
,"Ceasar pursues Pompey and the fleaing senate.*" 
,"Ceasar pursues Pompey and the fleaing senate.*" 
,null 
,null  
,null 
,null 
,null 
,null 
,null
,null
,null 
,null 
,null 
,null 
,null 
,null
,null 
,null 
,null 
,null 
,null 
,null  
,null 
,null 
,null 
,null 
,null
,null
,null 
,null 
,null 
,null 
,null
,null 
,null 
,null 
,null 
,null
,null 
,null 
,null 
,null
,null 
,"Ceasar misses Pompey ar Brindisi" /*last day  04/17/49 BC*/]
}

var data3 = 
[
null
,"data 3 index2 "
,"data 3 index3 " 
,"data 3 index4 " 
,"data 3 index5 " 
,"data 3 index6 "  
,"data 3 index7 " 
,"data 3 index8 " 
,"data 3 index9 "
,"data 3 index10" 
,"data 3 index11" 
,null
,"data 3 index13"  
,"data 3 index14" 
,"data 3 index15" 
,"data 3 index16"
,"data 3 index17" 
,"data 3 index18" 
,"data 3 index19" 
,"data 3 index20"  
,"data 3 index21" 
,"data 3 index21" 
]

var data4 = 
[
null
,"data 4 index2 "
,"data 4 index3 " 
,"data 4 index4 " 
,"data 4 index5 " 
,null
,"data 4 index7 " 
,"data 4 index8 " 
,"data 4 index9 "
,"data 4 index10" 
,"data 4 index11" 
,"data 4 index12" 
,"data 4 index13"  
,"data 4 index14" 
,"data 4 index15" 
,"data 4 index16"
,"data 4 index17" 
,"data 4 index18" 
,"data 4 index19" 
,"data 4 index20"  
,"data 4 index21" 
,"data 4 index21" 
]

	var sentence1	= "test";
		function writeSentence1()
		{
			sentence1 = pompeyData[value];
			if (sentence1 == null || pCellActive == false)
			{
				document.getElementById("dynamicText1").innerHTML = '';
				document.getElementById("green_circle").style.opacity = "0";
				document.getElementById("green_circle").style.height = "0px";
				document.getElementById("green_circle").style.width = "0px";

			}
			else if (pCellActive = true)
			{
				document.getElementById("dynamicText1").innerHTML = sentence1;
				document.getElementById("green_circle").style.opacity = "1";
				document.getElementById("green_circle").style.height = "35px";
				document.getElementById("green_circle").style.width = "35px";

			}
		}
		function writeSentence2()
		{
			var sentence2 = ceasarData[value]
			if (sentence2== null || cCellActive == false)
			{
				document.getElementById("dynamicText2").innerHTML = '';
				document.getElementById("red_circle").style.opacity = "0";
				document.getElementById("red_circle").style.height = "0px";
				document.getElementById("red_circle").style.width = "0px";

			}
			else if (cCellActive = true)
			{
				document.getElementById("dynamicText2").innerHTML = sentence2;
				document.getElementById("red_circle").style.opacity = "1";
				document.getElementById("red_circle").style.height = "35px";
				document.getElementById("red_circle").style.width = "35px";

			}
		}
		function writeSentence3()
		{
			var sentence3 = data3[value]
			if (sentence3 == null || aCellActive == false)
			{
				document.getElementById("dynamicText3").innerHTML = '';
				document.getElementById("blue_circle").style.opacity = "0";
				document.getElementById("blue_circle").style.height = "0px";
				document.getElementById("blue_circle").style.width = "0px";

			}
			else if (aCellActive = true)
			{
				document.getElementById("dynamicText3").innerHTML = sentence3;
				document.getElementById("blue_circle").style.opacity = "1";
				document.getElementById("blue_circle").style.height = "35px";
				document.getElementById("blue_circle").style.width = "35px";

			}
		}
		function writeSentence4()
		{
			var sentence4 = data4[value]
			if (sentence4== null || tCellActive == false)
			{
				document.getElementById("dynamicText4").innerHTML = '';
				document.getElementById("yellow_circle").style.opacity = "0";
				document.getElementById("yellow_circle").style.height = "0px";
				document.getElementById("yellow_circle").style.width = "0px";

			}
			else if (tCellActive = true)
			{
				document.getElementById("dynamicText4").innerHTML = sentence4;
				document.getElementById("yellow_circle").style.opacity = "1";
				document.getElementById("yellow_circle").style.height = "35px";
				document.getElementById("yellow_circle").style.width = "35px";

			}
		}

