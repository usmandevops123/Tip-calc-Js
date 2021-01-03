
function tipcalcy(){
    let amount=document.getElementById('bill_amount').value; 
    //console.log(amount);
    let perc=document.getElementById('tip_perc').value;

    let tip = amount * (perc/100);

    let total=tip + Number(amount);
    console.log(total); 
    document.getElementById('tip_total').value=tip;
    document.getElementById('tip_billed').value=total;
}