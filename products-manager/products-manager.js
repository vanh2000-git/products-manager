let products = []; //
let editingIndex = -1;
function renderProducts() {
    const table = document.getElementById("productTable");
    table.innerHTML = "";

    products.forEach((product, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${product}</td>
          <td>
            <button onclick="editProduct(${index})">Edit</button>
            <button onclick="deleteProduct(${index})">Delete</button>
          </td>
        `;
        table.appendChild(row);
    });
}
function addProduct() {
    const input = document.getElementById("productInput");
    const productName = input.value.trim();

    if (productName === "") {
        alert("Please enter a product name.");
        return;
    }

    if (editingIndex === -1) {
        // Thêm mới
        products.push(productName);
    } else {
        products[editingIndex] = productName;
        editingIndex = -1;
    }

    input.value = "";
    renderProducts();
}
function editProduct(index) {
    const input = document.getElementById("productInput");
    input.value = products[index];
    editingIndex = index;
}

function deleteProduct(index) {
    products.splice(index, 1);
    renderProducts();
}