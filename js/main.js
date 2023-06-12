function validateForm(event) {
    event.preventDefault();

    document.getElementById('nameError').textContent = '';
    document.getElementById('priceError').textContent = '';
    document.getElementById('inventoryError').textContent = '';
    
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const inventory = document.getElementById('inventory').value;

    let result = true;
    
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Please enter a name.';
        result = false;
    }
    
    if (price.trim() === '') {
        document.getElementById('priceError').textContent = 'Please enter a price.';
        result = false;
    }
    
    if (isNaN(price) || price <= 0) {
        document.getElementById('priceError').textContent = 'Please enter a valid price.';
        result = false;
    }
    
    if (inventory.trim() === '') {
        document.getElementById('inventoryError').textContent = 'Please enter an inventory quantity.';
        result = false;
    }
    
    if (isNaN(inventory) || inventory < 0) {
        document.getElementById('inventoryError').textContent = 'Please enter a valid inventory quantity.';
        result = false;
    }

    
    if (result) {
        alert('Product created!');
    }
    
    return result;
    }
    

    document.getElementById('productForm').addEventListener('submit', validateForm);
    
    function mostrarAlerta() {
    alert('Product added!');
    }