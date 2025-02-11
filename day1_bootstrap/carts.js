// Initialize an array to hold cart items
let cart = [];

function findAmount() {
    const qty = document.getElementById("qty").value;
    const price = document.getElementById("price").value;
    const amount = qty * price;
    document.getElementById("amount").value = amount;
}

function addItem() {
    const productName = document.getElementById("name").value;
    const qty = parseInt(document.getElementById("qty").value);
    const price = parseFloat(document.getElementById("price").value);
    const amount = qty * price;

    // Check if all fields are filled
    if (!productName || !qty || !price) {
        alert("Please fill in all fields.");
        return;
    }

    // Check if the product is already in the cart
    let productFound = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === productName) {
            // Product exists, update the quantity and recalculate the amount
            cart[i].quantity += qty;
            cart[i].amount = cart[i].quantity * cart[i].price;
            productFound = true;
            break;
        }
    }

    // If the product was not found, add a new product to the cart
    if (!productFound) {
        cart.push({ name: productName, quantity: qty, price: price, amount: amount });
    }

    // Display the updated cart
    displayCart();
    
    // Clear input fields after adding the product
    document.getElementById("name").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("price").value = "";
    document.getElementById("amount").value = "";
}

function displayCart() {
    let cartContent = "<table class='table table-bordered'><thead><tr><th>Product</th><th>Quantity</th><th>Price</th><th>Amount</th></tr></thead><tbody>";
    
    let totalAmount = 0;
    
    // Loop through each item in the cart and create a row for it
    cart.forEach(item => {
        cartContent += `<tr>
                            <td>${item.name}</td>
                            <td>${item.quantity}</td>
                            <td>$${item.price.toFixed(2)}</td>
                            <td>$${item.amount.toFixed(2)}</td>
                        </tr>`;
        totalAmount += item.amount;  // Update the total amount
    });

    cartContent += `</tbody></table>`;
    cartContent += `<h4>Total: $${totalAmount.toFixed(2)}</h4>`;  // Display the total price

    // Display the cart in the "scart" container
    document.getElementById("scart").innerHTML = cartContent;
}
