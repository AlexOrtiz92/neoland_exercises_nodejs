const container = document.getElementById("carouselBox");



const galeria = () => {
  fetch("http://127.0.0.1:4444/api/images").then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);

    const imagesAll = data.images.map((image) => {
      let img = ""
      if (data.images[1] === image) {
        img = `
      <div class="carousel-item active">
      <img src="/images/${image}" class="d-block w-100" alt="...">
      </div>`
      } else {
        img = `
      <div class="carousel-item">
      <img src="/images/${image}" class="d-block w-100" alt="...">
      </div>`
      }

      return img

    }).join("")


    console.log(imagesAll)

    container.innerHTML = imagesAll

  }).catch((err) => {
    console.error(err)
  })
}

galeria();