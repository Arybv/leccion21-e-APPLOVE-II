//modal
var modal = document.getElementById("myModal");
//imagenes
var img = document.getElementById("myImg10");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
//span
var span = document.getElementsByClassName("close")[0];
span.onclick = function(){
  modal.style.display = "none";
}
