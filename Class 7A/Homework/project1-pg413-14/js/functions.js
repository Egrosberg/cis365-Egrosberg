/* define your functions here */
// Esther Chaya Grosberg
// 3/10/24

function calculateTotal(quantity, price){
    return (quantity*price)
}

function outputCartRow(item, total){
    document.write('<tr><td><img src=images/'+item.product.filename+'></td><td>'+item.product.title+'</td><td>'+item.quantity+'</td><td>$'+item.product.price.toFixed(2)+'</td><td>$'+total.toFixed(2)+'</td></tr>');
}


function subtotal(){
    let amount = 0;
    for (let item of cart){
        amount=amount+calculateTotal(item.quantity, item.product.price);
    }
    return amount.toFixed(2);
}

function calculateTax(tax_rate){
    let taxAmount=0;
    for (let item of cart){
        taxAmount=taxAmount+tax_rate*calculateTotal(item.quantity,item.product.price);
    }
    return taxAmount.toFixed(2);
}

function calculateShipping(shipping_threshold){
    let total=0;
    let shipping=0;
    for (let item of cart){
        total=total+calculateTotal(item.quantity, item.product.price);
   }
   if (total<shipping_threshold){
        shipping=40;
   }
   return shipping.toFixed(2);
}

function calculateGrandTotal(tax_rate, shipping_threshhold){
    var grandTotal=0;
    grandTotal=parseInt(subtotal())+parseInt(calculateTax(tax_rate))+parseInt(calculateShipping(shipping_threshhold));
    return grandTotal.toFixed(2);

}

