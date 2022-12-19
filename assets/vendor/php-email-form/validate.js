
function btnclick(){

  var nameField = document.getElementById('name1').value.trim();
  var emailField = document.getElementById('email1').value.trim();
  var subjectField = document.getElementById('subject1').value.trim();
  var messageField = document.getElementById('message1').value.trim();
  let btn;
    
  if (nameField === '' || emailField === '' || subjectField === '' || messageField === '') {
      btn = false;
      document.getElementById('statMessage').innerHTML= 'All fields are required...!';
  }else{
      btn = true;
  }

  return btn;
  }

