let email = prompt('Enter email');
let pass,
  newPass,
  newPassConfirmation,
  minEmaiLength = 6,
  minPasswordLength = 5;
let database = {};
database['admin@gmail.com'] = 'AdminPass';
database['user@gmail.com'] = 'UserPass';
if (email === '' || email === null) {
  alert('Canseled.');
} else {
  if (email.length < minEmaiLength) {
    alert('I don`t know any emails having name length less than 6 symbols.');
  } else {
    if (database[email] !== undefined) {
      pass = prompt('Enter password');
      if (database[email] === pass) {
        let changePassword = confirm('Do you want to change your password?');
        if (changePassword) {
          pass = prompt('Enter old password.');
          if (database[email] === pass) {
            newPass = prompt('Enter new password.');
            if (newPass.length >= minPasswordLength) {
              newPassConfirmation = prompt('Enter new password again.');
              if (newPass === newPassConfirmation) {
                alert('You have successfully changed your password.');
              } else {
                alert('You wrote the wrong password.');
              }
            } else {
              alert('It’s too short password. Sorry.');
            }
          } else {
            alert('Wrong password.');
          }
        } else {
          alert('You have failed the change.');
        }
      } else {
        alert('Wrong password.');
      }
    } else {
      alert('I don’t know you.');
    }
  }
}