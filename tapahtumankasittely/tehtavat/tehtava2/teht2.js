document.getElementById("kuva").onmouseover = function() {mouseOver()};
document.getElementById("kuva").onmouseout = function() {mouseOut()};
document.getElementsByTagName("p")[0].setAttribute("Id", "teksti");
function mouseOver(){
  document.getElementById("teksti").style.display = 'block';
}
function mouseOut(){
  document.getElementById("teksti").style.display = 'none';
}