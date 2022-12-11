if(document.querySelector("#quoteCarousel")){
  const quoteCarousel = new Carousel(document.querySelector("#quoteCarousel"), {
    infinite: false,
    Dots: false,
    friction: 0.88,
    slidesPerPage: 1,
  });
}
if (document.querySelector("#elastic_search")){
  document.querySelector("#elastic_search").oninput = function(){
    let main = document.querySelector("main")
    let modalSearch = document.querySelector(".search_elastic_block")
    let val = this.value.trim()
    let elasticItems = document.querySelectorAll(".elastic li")
    modalSearch.classList.add("active_modal")
    main.addEventListener("click", function(){
      modalSearch.classList.remove("active_modal")
    })
    if(val != ""){
      elasticItems.forEach(function(elem){
        if(elem.innerText.search(val) == -1){
          elem.classList.add("hide_items_elastic")
        }
        else{
          elem.classList.remove("hide_items_elastic")
        }
      })
    }
    else{
      elasticItems.forEach(function(elem){
        elem.classList.remove("hide_items_elastic")
      })
    }
  }
}
if(document.querySelector(".button_like_counter")){
  let buttonLike = document.querySelector(".button_like_counter")
  let likeCounter = document.querySelector(".like_counter")
  buttonLike.addEventListener("click", function(){
    buttonLike.classList.toggle("active_like")
    if (buttonLike.classList.contains("active_like")){
      let valCounter = likeCounter.textContent
      likeCounter.innerText = Number(valCounter) + 1
    }
    else {
      let valCounter = likeCounter.textContent
      likeCounter.innerText = Number(valCounter) -1
    }
  })
}
if(document.querySelector(".location_button")){
  let locationButton = document.querySelector(".location_button")
  let locationSearchBlock = document.querySelector(".location_search")
  locationButton.addEventListener("click", function(){
    locationSearchBlock.classList.toggle("display_flex")
    if(locationButton.classList.contains("post")){
      console.log("Список получен ранее")
    }
    else{
      locationButton.classList.add("post")
      console.log("Список получен")
      let city = ["Любой город"]
      fetch('https://studika.ru/api/areas', {

    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
})
    .then((response) => response.json())
    .then((json) => 
      console.log(json));
    }
  })
  let main = document.querySelector("main")
  main.addEventListener("click", function(){
    locationSearchBlock.classList.remove("display_flex")
  })
}