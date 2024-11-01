function calculateTotal() {
  const rows = document.querySelectorAll('#product-table tr')
  let grandTotal = 0

  rows.forEach((row) => {
    // Get the price and quantity input elements
    const priceElement = row.querySelector('.price')
    const quantityElement = row.querySelector('.quantity')

    // Get the price and quantity values
    const price = parseFloat(priceElement.value) || 0
    const quantity = parseInt(quantityElement.value) || 0

    // Calculate the total price for this row
    const totalPrice = price * quantity

    // Display the total price in the appropriate cell
    const totalPriceCell = row.querySelector('.total-price')
    totalPriceCell.textContent = totalPrice.toFixed(2)

    // Add to grand total
    grandTotal += totalPrice
  })

  // Display the grand total
  document.getElementById('grand-total').textContent = grandTotal.toFixed(2)
}
