// registration 

function validation() {

    var password = document.getElementById('password').value;
    var passwordconfirm_ = document.getElementById('passwordconfirm').value;


    if ((password.length < 8) || (password.length > 20)) {
        document.getElementById('password_').innerHTML = "*Password must be at least 8 characters";
        return false;
    }
    if (password != passwordconfirm_) {
        document.getElementById('passwordconfirm_').innerHTML = "*Passwords are not matching";
        return false;
    }

}
