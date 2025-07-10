// endpoiny criceti
const endpointHamster = "https://api.pexels.com/v1/search?query=hamsters";
// endpoint tigri
const endpointTiger = "https://api.pexels.com/v1/search?query=tigers";
// recupero i bottoni
const buttonLoad = document.getElementById("buttonLoad");
const secondButtonLoad = document.getElementById("secondButtonLoad");
// recupero immagini da cambiare al click
const immaginiDefault = document.querySelectorAll("img");
console.log(immaginiDefault);
// recupero bottone per eliminare le card
const editButton = document.getElementsByClassName("editButton");
console.log(editButton[0].innerText);
// funzione che quando chiamata abilita il bottone che fa scomparire le card
const abilitaBottoniHide = () => {
  const editButtons = document.querySelectorAll(".editButton");

  editButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const card = e.target.closest(".col-md-4");
      if (card) {
        card.remove();
      }
    });
  });
};
//
//
// funzione per far apparire le card criceto
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
      // sostituisco 9min con l'id di ogni foto

      const foto = arrayHamster.photos;

      buttonLoad.addEventListener("click", () => {
        // for (let i = 0; i < arrayHamster.photos.length; i++) {
        //   const id = arrayHamster.photos[i].id;
        //   const small = document.getElementsByTagName("small");
        //   console.log(small[0].textContent);
        //   for (let i = 0; i < small.length; i++) {
        //     small[i].textContent = id;
        //   }
        // }
        for (let i = 0; i < arrayHamster.photos.length; i++) {
          const id = arrayHamster.photos[i].id;
          const small = document.getElementsByTagName("small");
          if (small[i]) {
            small[i].textContent = id;
          }
        }
        for (let i = 0; i < editButton.length; i++) {
          editButton[i].innerText = "Hide";
        }

        immaginiDefault.forEach((img, i) => {
          if (foto[i]) {
            img.setAttribute("src", foto[i].src.medium);
          }
        });
      });
      //   editButton.forEach((button) => {
      //     button.addEventListener("click", (e) => {
      //       const card = e.target.closest(".col-md-4");
      //       if (card) {
      //         card.classList.add("d-none");
      //       }
      //     });
      //   });
      abilitaBottoniHide();
    })
    .catch((err) => {
      console.log("errore", err);
    });
};
// funzione per far apparire card con tigri
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
      console.log(arrayTiger);
      // sostituisco 9min con l'id di ogni foto
      for (let i = 0; i < arrayTiger.photos.length; i++) {
        const id = arrayTiger.photos[i].id;
        const small = document.getElementsByTagName("small");
        if (small[i]) {
          small[i].textContent = id;
        }
      }
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
      abilitaBottoniHide();
    })
    .catch((err) => {
      console.log("errore", err);
    });
};
const endpointSearch =
  "https://www.pexels.com/it-it/api/documentation/#photos-search";

const getSearch = function () {
  fetch(endpointSearch, {
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
    .then((arraySearch) => {
      console.log(arraySearch);
    })
    .catch((err) => {
      console.log("errore", err);
    });
};
// inserisco form per ricerca nuove immagini
const ricerca = document.getElementById("spazioCerca");
ricerca.innerHTML = `<form action='/submit'>
  <div class="mb-3">
    <label for="search" class="form-label">SEARCH</label>
    <input type="text" class="form-control" id="search" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
const inputSearch = document.getElementById("search");
console.log(inputSearch.value);
getHamster();
getTiger();
getSearch();
