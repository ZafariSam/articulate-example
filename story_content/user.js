function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5s7iLiykfG2":
        Script1();
        break;
      case "6DLaJbMqZHc":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var ShowResources = player.GetVar('showResources');
console.log('Button clicked but ShowResources is = ' + ShowResources);

if (!ShowResources)
{
  console.log('Show Resources is: ' + ShowResources);
  ShowResources = true;
  player.SetVar('showResources', ShowResources);
  player.SetVar('showMenu', false);
  player.SetVar('showHelp', false);
  console.log('Show Resources is now: ' + ShowResources);
}else{
  console.log('Show Resources is: ' + ShowResources);
  ShowResources = false;
  player.SetVar('showResources', ShowResources);
  console.log('Show Resources is now: ' + ShowResources);
}
}

function Script2()
{
  var player = GetPlayer();

var ShowHelp = player.GetVar('showHelp');
console.log('Button clicked but ShowHelp is = ' + ShowHelp);

if (!ShowHelp)
{
  console.log('Show Help is: ' + ShowHelp);
  ShowHelp = true;
  player.SetVar('showHelp', ShowHelp);
  player.SetVar('showResources', false);
  player.SetVar('showMenu', false);
  console.log('Show Help is now: ' + ShowHelp);
}else{
  console.log('Show Help is: ' + ShowHelp);
  ShowHelp = false;
  player.SetVar('showHelp', ShowHelp);
  console.log('Show Help is now: ' + ShowHelp);
}
}

