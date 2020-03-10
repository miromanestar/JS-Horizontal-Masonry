(function() {
  createElements();
})();

function createElements() {
  for(let i = 0; i < 10; i++) {
    var masonryDiv = document.createElement("div");
    masonryDiv.setAttribute("class", "masonry-div");
    masonryDiv.setAttribute("id", "masonry-div-" + i);
    masonryDiv.innerText = i;
    document.getElementById("masonry").appendChild(masonryDiv);
  }
}
