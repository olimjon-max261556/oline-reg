const userName = document.querySelector('#name');
const userSurname = document.querySelector('#surname');
const userAge = document.querySelector('#age');
const error = document.querySelector('.alert.alert-danger')
const button = document.querySelector('.btn.btn-primary');
const write = document.querySelector('.alert.alert-primary.d-flex')
button.onclick = () => {

  let name = userName.value
  let surname = userSurname.value
  let age = userAge.value
  if (name == "" && surname == "" && age == "") {
    error.classList.remove("d-none");
    error.innerText = "Siz Formani Kiritmadingiz!!";
  }
  if(name == ""){
    error.classList.remove("d-none");
    error.innerText = "Siz ismini Kiritmadingiz!!";
  }
  if(surname == ""){
    error.classList.remove("d-none");
    error.innerText = "Siz familyangizni  Kiritmadingiz!!";
  }
  if(age == ""){
    error.classList.remove("d-none");
    error.innerText = "Siz yoshingizni  Kiritmadingiz!!";
  }
     if(name == "" && surname == ""){
        error.classList.remove("d-none");
        error.innerText = "siz ismingizni va familyangizni kiritmadingiz";
     }

     if(name == "" && age == ""){
        error.classList.remove("d-none");
        error.innerText = "siz ismingizni va yoshingizni  kiritmadingiz";
     }

     if(age == "" && surname == ""){
        error.classList.remove("d-none");
        error.innerText = "siz yoshingiz  va familyangizni kiritmadingiz";
     }

     if(age == 1 && 2 && 3 && 4 && 5 && 6 && 7){
        error.classList.remove("d-none");
        error.innerText = "siz yoshingiz kichiik ekan";
     }

     else{
        write.classList.remove('d-none');
        write.innerText = 'siz muvafaqiyatli o`tingiz'
     }
}