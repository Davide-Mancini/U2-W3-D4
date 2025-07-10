const endpointHamster = "https://api.pexels.com/v1/search?query=hamsters";
const endpointTiger = "https://api.pexels.com/v1/search?query=tigers";
const buttonLoad = document.getElementById("buttonLoad");
const secondButtonLoad = document.getElementById("secondButtonLoad");
const immaginiDefault = document.querySelectorAll("img");
console.log(immaginiDefault);
const editButton = document.getElementsByClassName("editButton");
console.log(editButton[0].innerText);
//
//
const getHamster = function () {
  fetch(endpointHamster, {
    headers: {
      Authorization: "F2ozIYCM5CH2HP96zCp7SCHCm6mZEkPu8mC7ZikeiXjAJzvkTodoKWMW",
    },
  })
    .then((Response) => {
      if (Response.ok === true) {
        return Response.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((arrayHamster) => {
      console.log(arrayHamster.photos);
      const foto = arrayHamster.photos;

      buttonLoad.addEventListener("click", () => {
        for (let i = 0; i < editButton.length; i++) {
          editButton[i].innerText = "Hide";
        }

        immaginiDefault.forEach((img, i) => {
          if (foto[i]) {
            img.src = foto[i].src.medium;
          }
        });
      });
    })
    .catch((err) => {
      console.log("errore", err);
    });
};
const getTiger = function () {
  fetch(endpointTiger, {
    headers: {
      Authorization: "F2ozIYCM5CH2HP96zCp7SCHCm6mZEkPu8mC7ZikeiXjAJzvkTodoKWMW",
    },
  })
    .then((Response) => {
      if (Response.ok === true) {
        return Response.json();
      } else {
        throw new Error("errore");
      }
    })
    .then((arrayTiger) => {
      console.log(arrayTiger.photos);
      const foto = arrayTiger.photos;
      secondButtonLoad.addEventListener("click", () => {
        for (let i = 0; i < editButton.length; i++) {
          editButton[i].innerText = "Hide";
        }
        immaginiDefault.forEach((img, i) => {
          if (foto[i]) {
            img.src = foto[i].src.medium;
          }
        });
      });
    })
    .catch((err) => {
      console.log("errore", err);
    });
};

getHamster();
getTiger();
