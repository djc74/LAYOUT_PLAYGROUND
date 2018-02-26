//waiting for page to load
window.addEventListener("load", function ()
{
  //listeninmg for scroll
  window.addEventListener("scroll", function()
{
  //selecting image
  var img = document.querySelector("header img");

  //setting width to increase on scroll
  img.style.width = (100+(window.scrollY/20))+"%";

  //setting positioning to change on scroll
  img.style.left = (0-(window.scrollY/50))+"%";

  //setting opacity to fade on scroll
  img.style.opacity = 1-(1/(window.innerHeight/window.scrollY));
})
})
