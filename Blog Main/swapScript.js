// Swapper
function navigationOpen(siteTitle,navBar)
{
   d1 = document.getElementById('siteTitle');
   d2 = document.getElementById('navBar');
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }
}

// Close nav bar
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var navigation = document.getElementById('navBar');

closeBtn.addEventListener('click', closeNavigation);

function closeNavigation(){
  navigation.style.display = 'none';
  d1.style.display = "block";
}
