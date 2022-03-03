//days until National Star Wars Day May 4th
let today = new Date();
var swday= new Date(today.getFullYear(), 4, 3);
if (today.getMonth()==4 && today.getDate()>3) 
{
swday.setFullYear(swday.getFullYear()+1); 
}  
var one_day=1000*60*60*24;
document.getElementById("swday").innerHTML = (Math.ceil((swday.getTime()-today.getTime())/(one_day))+
" days until National Star Wars Day!");
