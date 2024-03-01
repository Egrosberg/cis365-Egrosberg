/* add code below this */


// let bill = prompt("What is the bill total?");
// let iBill=Number(bill);


// // const TIP_PERCENTAGE = 0.10;
// // let tip = iBill*TIP_PERCENTAGE;

// // console.log(`For bill of $${bill} the tip should be $${tip}`);

// if (iBill!=undefined && iBill !=0)//truthy/falsy
// // if(iBill>0)
// {
//     console.log(`For bill of $${bill} the tip should be $${tip}`);
// }
// else{
//     console.log(`${bill} is not a valid number`);
// }

const billTotals = [50., 150.00, 20.00, 500.00];
const tips=[];

for(let total of billTotals){
    let tip;
    if (total<30){
        tip=total*0.30;
    } else if (total>=30 && total <=75){
        tip=total*0.20
    } else {
        tip = total * 0.10
    }

    tips.push(tip);
}

for (let i = 0; i < billTotals.length; i++) {
    console.log("For bill of $" + billTotals[i] + " the tip should be $" + tips[i]);
}