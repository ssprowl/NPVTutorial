function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66p9QpFBvUG":
        Script1();
        break;
      case "5uI2SGvzVUb":
        Script2();
        break;
      case "6qQUlOrKPSm":
        Script3();
        break;
      case "6mbDAw4y0xp":
        Script4();
        break;
  }
}

function Script1()
{
  var player=GetPlayer();

//grab the equation inputs from SL
var CoCapPer=player.GetVar("CoCapPer");
var year1=player.GetVar("year1");
var year2=player.GetVar("year2");
var year3=player.GetVar("year3");

//run the calculation and push into the SL variable called output
results1=(1-(1+CoCapPer)**-year1)/CoCapPer
results2=(1-(1+CoCapPer)**-year2)/CoCapPer
results3=(1-(1+CoCapPer)**-year3)/CoCapPer

player.SetVar("output1",results1);
player.SetVar("output2",results2);
player.SetVar("output3",results3);

}

function Script2()
{
  var player = GetPlayer();
var JSAnswer1 = player.GetVar("cost1");

JSAnswer1 = numberWithCommas(JSAnswer1);

player.SetVar("JSAnswer1",JSAnswer1);

var JSAnswer2 = player.GetVar("cost2");

JSAnswer2 = numberWithCommas(JSAnswer2);

player.SetVar("JSAnswer2",JSAnswer2);

var JSAnswer3 = player.GetVar("cost3");

JSAnswer3 = numberWithCommas(JSAnswer3);

player.SetVar("JSAnswer3",JSAnswer3);

var JSAnswer4 = player.GetVar("ann1");

JSAnswer4 = numberWithCommas(JSAnswer4);

player.SetVar("JSAnswer4",JSAnswer4);

var JSAnswer5 = player.GetVar("ann2");

JSAnswer5 = numberWithCommas(JSAnswer5);

player.SetVar("JSAnswer5",JSAnswer5);

var JSAnswer6 = player.GetVar("ann3");

JSAnswer6 = numberWithCommas(JSAnswer6);

player.SetVar("JSAnswer6",JSAnswer6);


var JSAnswer7 = player.GetVar("npresentvalue");

JSAnswer7 = numberWithCommas(JSAnswer7);

player.SetVar("JSAnswer7",JSAnswer7);


function numberWithCommas(x) {
   var parts = x.toString().split(".");
   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   return parts.join(".");
}


}

function Script3()
{
  var player=GetPlayer();

//grab the equation inputs from SL
var CoCapPer=player.GetVar("CoCapPer");
var Years1=player.GetVar("Years1");

//run the calculation and push into the SL variable called output
results=(1-(1+CoCapPer)**-Years1)/CoCapPer

player.SetVar("output",results);



}

function Script4()
{
  var player = GetPlayer();
var JSAnswer1 = player.GetVar("cost1");

JSAnswer1 = numberWithCommas(JSAnswer1);

player.SetVar("JSAnswer1",JSAnswer1);

var JSAnswer2 = player.GetVar("cost2");

JSAnswer2 = numberWithCommas(JSAnswer2);

player.SetVar("JSAnswer2",JSAnswer2);

var JSAnswer3 = player.GetVar("cost3");

JSAnswer3 = numberWithCommas(JSAnswer3);

player.SetVar("JSAnswer3",JSAnswer3);

var JSAnswer4 = player.GetVar("ann1");

JSAnswer4 = numberWithCommas(JSAnswer4);

player.SetVar("JSAnswer4",JSAnswer4);

var JSAnswer5 = player.GetVar("ann2");

JSAnswer5 = numberWithCommas(JSAnswer5);

player.SetVar("JSAnswer5",JSAnswer5);

var JSAnswer6 = player.GetVar("ann3");

JSAnswer6 = numberWithCommas(JSAnswer6);

player.SetVar("JSAnswer6",JSAnswer6);


var JSAnswer7 = player.GetVar("npresentvalue");

JSAnswer7 = numberWithCommas(JSAnswer7);

player.SetVar("JSAnswer7",JSAnswer7);


function numberWithCommas(x) {
   var parts = x.toString().split(".");
   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   return parts.join(".");
}


}

