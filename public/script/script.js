let ingredient = document.querySelectorAll(".ingredient-input")
let ingredientArea = document.querySelector(".input-insert");




const myFunction = (e) => {
  if (e.target.value !== 0){
      let input = document.createElement('input');
      input.placeholder = "insert an Ingredient";
      input.classList.add("ingredient-input");
      input.name = "input";
      ingredientArea.appendChild(input);
      ingredient = document.querySelectorAll(".ingredient-input")
      for (let i = 1; i < ingredient.length; i++){
          ingredient[i].addEventListener("change", myFunction);
      }
  }
}


for (let i = 1; i < ingredient.length; i++){
    ingredient[i].addEventListener("change", myFunction);
}

//need to make some validation in the front to prevent submit a recipe without image, ingredients and instruction

const fileInput = document.getElementById("image");

const divToAdd = document.querySelector("#where")


fileInput.onchange = evt => {
    const [file] = fileInput.files
    if (file){
        divToAdd.src = URL.createObjectURL(file)
    }
}

//todo: need to find a way to resize the image and after this change i want to create a button to replace the image.