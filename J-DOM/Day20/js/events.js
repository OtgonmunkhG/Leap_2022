

function validation(inputs) {
    // энд та нарт бүх input орж ирж байгаа зөв эсэхийг дараах байдалаар шалгана
    let password = inputs.psw;
    console.log(psw.value);
    let repeatPassword = inputs.repeatPsw;
    console.log(repeatPassword.value);
    let email = inputs.email;
    console.log(email);
    if(password.value === repeatPassword.value && password.length >= 8 && repeatPassword.length >= 8 && email.value.includes("@") && email.value.includes(".")){
        return true;
       
    }
   
    // 2 password хоорондоо адил байгаа эсэх
    
    // password ийн урт 8с урт байх ёстой

    // email дотор заавал @ болон . орсон байх
    console.log(inputs.email.value);

    // эдгээр нөхцөл биелсэн бол true буцаана
  
    //жишээ хэрэглээ
    console.log("Email input ийн урт: ", inputs.email.value.length);
    return false;
  }
  
  // бүх input үүдийг inputs-д авч байна
  const inputs = document.getElementsByTagName("input");
  // хэдэн input байгааг тоолж байна
  const howManyInputs = document.getElementsByTagName("input").length;
  
  for (let i = 0; i < howManyInputs; i++) {
    // input бүрт addEventListener өгч change эвэнтийг сонсож байна
    inputs[i].addEventListener("change", () => {
      // input ийн утга өөрчлөгдөх бүрт 3н input үүдийн утгуудыг харж болно
      console.log("Email-ийн утга: ", inputs.email.value);
      console.log("Password-ийн утга: ", inputs.psw.value);
      console.log("repeatPsw-ийн утга: ", inputs.repeatPsw.value);
  
      // бүх input үүдийг авч зөв эсэхийг шалгах фүнкц дуудаж байна
      if (validation(inputs)) {
        document.querySelector(".registerBtn").disabled = false;
      }
    });
  }
//   console.log("test");