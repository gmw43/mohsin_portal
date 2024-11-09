function calculateTotal() {
  const rows = document.querySelectorAll('#product-table tr')
  let grandTotal = 0

  rows.forEach((row) => {
    const price = parseFloat(row.querySelector('.price').value) || 0
    const quantity = parseInt(row.querySelector('.quantity').value) || 0
    const totalPrice = price * quantity

    row.querySelector('.total-price').textContent = totalPrice.toFixed(2)
    grandTotal += totalPrice
  })

  document.getElementById('grand-total').textContent = grandTotal.toFixed(2)
}
