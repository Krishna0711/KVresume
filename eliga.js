 var positiveButton = document.getElementById("bp");
 var neutralButton = document.getElementById("bn");
 var negativeButton = document.getElementById("bNe");
 var notAvailableButton = document.getElementById("bNa");
 var eligaPvtLtd = document.getElementById("eligaPvtLtd");
 var eligaHyderabad = document.getElementById("eligaHyderabad");
 var positive1 = document.getElementById("positive1")
 var positive2 = document.getElementById("positive2")
 var negative1 = document.getElementById("negative1")
 var notAvailable1 = document.getElementById("notAvailable1")
 var notAvailable2 = document.getElementById("notAvailable2")
 var notAvailable3 = document.getElementById("notAvailable3")
 var neutral1 = document.getElementById("neutral")
 console.log("hello")
function toggle_vP() 
{
    if (positive1.style.display == 'table-row' || positive1.style.display=='')
    {
        positive1.style.display = 'none';
    }
    else 
    {
        positive1.style.display = 'table-row';
    }
       if (positive2.style.display == 'table-row' || positive2.style.display=='')
    {
        positive2.style.display = 'none';
    }
    else 
    {
        positive2.style.display = 'table-row';
    }
}
function toggle_vN() 
{
    if (negative1.style.display == 'table-row' || negative1.style.display=='')
    {
        negative1.style.display = 'none';
    }
    else 
    {
        negative1.style.display = 'table-row';
    }
}

function toggle_vNa() 
{
    if (notAvailable1.style.display == 'table-row' || notAvailable1.style.display=='')
    {
        notAvailable1.style.display = 'none';
    }
    else 
    {
        notAvailable1.style.display = 'table-row';
    }
       if (notAvailable2.style.display == 'table-row' || notAvailable2.style.display=='')
    {
        notAvailable2.style.display = 'none';
    }
    else 
    {
        notAvailable2.style.display = 'table-row';
    }
    if (notAvailable3.style.display == 'table-row' || notAvailable3.style.display=='')
    {
        notAvailable3.style.display = 'none';
    }
    else 
    {
        notAvailable3.style.display = 'table-row';
    }
}
function toggle_vNe(){
	if (neutral1.style.display == 'table-row' || neutral1.style.display=='')
    {
        neutral1.style.display = 'none';
    }
    else 
    {
        neutral1.style.display = 'table-row';
    }
}
function show_positive(){
	positiveButton.onclick = count += 1;
	if(count)
}
  positiveButton.addEventListener("click",function(){
  	toggle_vN()
  	toggle_vNa()
  	toggle_vNe() 
  })
  neutralButton.addEventListener("click", function(){
 	toggle_vP()
 	toggle_vN()
 	toggle_vNa()
 })
  negativeButton.addEventListener("click", function(){
 	toggle_vP()
 	toggle_vNa()
 	toggle_vNe()

 })
  notAvailableButton.addEventListener("click", function(){
 	toggle_vNe()
 	toggle_vP()
 	toggle_vN()
 }) 