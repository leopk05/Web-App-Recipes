let ingredient = document.querySelectorAll(".ingredient-input")
let ingredientArea = document.querySelector(".let-flex");



const myFunction = (e) => {
  if (e.target.value !== 0){
      let input = document.createElement('input');
      input.placeholder = "insert an Ingredient";
      input.classList.add("ingredient-input");
      input.name = "input";
      ingredientArea.appendChild(input);

      ingredient = document.querySelectorAll(".ingredient-input")
      console.log(ingredient)
  }
}




// ingredient.forEach((item, index) => {
//     item.addEventListener("change", myFunction)
// })

for (let i = 1; i < ingredient.length; i++){
    ingredient[i].addEventListener("change", myFunction);


}

console.log(ingredient)