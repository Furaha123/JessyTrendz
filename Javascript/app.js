//all initial elements
const payAmountBtn = document.querySelector("#payAmount");
const decrementBtn = document.querySelectorAll("#decrement");
const quantityElem = document.querySelectorAll("#quantity");
const incrementBtn = document.querySelectorAll("#increment");
const priceElem = document.querySelectorAll("#price");
const subtotalElem = document.querySelectorAll("#subtotal");
const taxElem = document.querySelectorAll("#tax");
const totalElem = document.querySelectorAll("#total");

for (let i = 0; i < incrementBtn.length; i++) {
  incrementBtn[i].addEventListener("click", function () {
    let increment = Number(this.previousElementSibling.textContent);
    increment++;
    this.previousElementSibling.textContent = increment;
    totalCalculation();
  });

  decrementBtn[i].addEventListener("click", function () {
    let decrement = Number(this.nextElementSibling.textContent);
    if (decrement <= 1) {
      decrement = 1;
    } else {
      decrement--;
    }

    this.nextElementSibling.textContent = decrement;
    totalCalculation();
  });
}

// const totalCalculation = function () {
//   const tax = 0.05;
//   let subtotal = 0;
//   let totalTax = 0;
//   let total = 0;

//   for (let i = 0; i < quantityElem.length; i++) {
//     subtotal +=
//       Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
//   }
//   subtotalElem.textContent = subtotal.toFixed(2);

//   totalTax = subtotal * tax;
//   taxElem.textContent = totalTax.toFixed(2);

//   total = subtotal + totalTax;

//   totalElem.textContent = total.toFixed(2);
//   payAmountBtn.textContent = total.toFixed(2);
// };
// Function definition placed at the top
const totalCalculation = function () {
  const tax = 0.05;
  let subtotal = 0;
  let totalTax = 0;
  let total = 0;

  for (let i = 0; i < quantityElem.length; i++) {
    subtotal +=
      Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
  }

  // Loop through subtotalElem NodeList and update each element
  for (let i = 0; i < subtotalElem.length; i++) {
    subtotalElem[i].textContent = subtotal.toFixed(2);
  }

  totalTax = subtotal * tax;

  // Loop through taxElem NodeList and update each element
  for (let i = 0; i < taxElem.length; i++) {
    taxElem[i].textContent = totalTax.toFixed(2);
  }

  total = subtotal + totalTax;

  // Loop through totalElem NodeList and update each element
  for (let i = 0; i < totalElem.length; i++) {
    totalElem[i].textContent = total.toFixed(2);
  }

  payAmountBtn.textContent = total.toFixed(2);
};

// Rest of your code (event listeners) remains unchanged
