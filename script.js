const pwd1 = document.querySelector('#pwd');
const pwd2 = document.querySelector('#pwd2');



function validate(e){
    const pwd1Text = pwd1.value;
    const pwd2Text = pwd2.value;
    const errMsg = document.querySelector(".error-msg");

    if (pwd1Text == pwd2Text){
        pwd1.classList.remove("error");
        pwd2.classList.remove("error");
        errMsg.style.display = "none";
    }
    else {
        pwd1.classList.add("error");
        pwd2.classList.add("error");
        errMsg.style.display = "block";
    }
    
}

pwd1.addEventListener('input', validate);
pwd2.addEventListener('input', validate);