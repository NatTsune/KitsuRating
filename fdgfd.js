function registerUser(age, email) {
  if (age >= 18) {
    console.log("Uzytkownik pelnoletni");
  }
  else if (age > 0) {
    console.log("Uzytkownik jest niepelnoletni");
  }
  else {
    console.log("Niepoprawny wiek");
  }
   if (/\S+\@\S+\./.test(email)) {
    console.log("Email poprawny");
  } else {
    console.log("Bledne dane");
  }
    

  //return /@/.test(email);
}

registerUser(0, "test@a.com");

document.write("hej");
console.log("dziala");