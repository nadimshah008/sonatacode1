const checkInViewPort=()=>{
    var overviewAreas = document.querySelectorAll(".overview-area");
    console.log("All");

    for (var i = 0; i < overviewAreas.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = overviewAreas[i].getBoundingClientRect().top;
      var elementVisible = 200;
  
      if (elementTop < windowHeight - elementVisible) {
        overviewAreas[i].classList.add("active");
      } else {
        overviewAreas[i].classList.remove("active");
      }
    }
}
window.addEventListener('scroll',checkInViewPort)
