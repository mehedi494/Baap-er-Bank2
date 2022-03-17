const button = document.getElementById("btn")

button.addEventListener("click", function logIn () {
    const emailText = document.getElementById('input-email')
    const email = emailText.value
    const passText = document.getElementById('input-pass')
    const pass = passText.value
    console.log(email, pass)
    if (email == 'sontan@baap.com' && pass == 12345) {
    
        window.location.href = "./Banking.html";
        console.log('ok')

    }
    else {
        const errMsg = document.getElementById('err-msg').style.display = "block";
        
    }
    // console.log(email,pass);
})

