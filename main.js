function billSplit(totalAmount, totalPerson) {
  document.getElementById("word-form").addEventListener("submit", function(e){
    e.preventDefault();
    totalAmount = '';
    totalPerson = '';
    output = '';
    totalAmount = document.querySelector('#totalAmount').value;
    totalPerson = document.querySelector('#totalPerson').value;

    // input
    if(totalAmount == ''){
      swal({
        type: 'error',
        title: 'Empty',
        text: 'Please enter total amount',
      });
    } 
    else if(totalPerson == ''){
      swal({
        type: 'error',
        title: 'Empty',
        text: 'Please enter total person',
      });
    } 
    // final output
    else{
      output = totalAmount / totalPerson;
      formattedOutput = Math.ceil(output);
      Swal.fire(`Individual has to pay ${formattedOutput} bucks`);
    }
  });
}