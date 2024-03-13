
const tax_rate = prompt('Enter tax rate (0.10)');
const shipping_threshold = prompt('Enter shipping threshold (1000)');

/* add loop and other code here ... in this simple exercise we are not
   going to concern ourselves with minimizing globals, etc */

   for (let item of cart){
      outputCartRow(item, calculateTotal(item.quantity, item.product.price))
   }

   document.write('<tr class="totals"><td colspan="4">Subtotal</td><td>$'+subtotal()+'</td></tr>');
   document.write('<tr class="totals"><td colspan="4">Tax</td><td>$'+calculateTax(tax_rate)+'</td></tr>');
   document.write('<tr class="totals"><td colspan="4">Shipping</td><td>$'+calculateShipping(shipping_threshold)+'</td></tr>');
   document.write('<tr class="totals"><td colspan="4" class="focus">Grand Total</td><td class="focus">$'+calculateGrandTotal(tax_rate, shipping_threshold)+'</td></tr>');