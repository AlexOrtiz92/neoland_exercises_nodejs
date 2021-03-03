
const buttonPost = document.getElementById("buttonPost")


buttonPost.addEventListener("click", () => {

  const upload = () => {

    const formData = new FormData();
    const fileinput = document.getElementById("image");

    formData.append('name', 'abc123');
    formData.append('file', fileinput.files[0]);

    const options = {
      method: "POST",
      body: formData
    }


    fetch("http://127.0.0.1:2929/api/images", options).then((response) => {
      return response.json();
    }).then((data) => {
      console.log(data);
      alert("fichero subido");
      window.location.href = "http://127.0.0.1:5555/add";
    })
      .catch((err) => {
        console.error(err);
      })
  }
  upload();

})

