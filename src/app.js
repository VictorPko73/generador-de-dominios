import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  const extension = ['.com', '.net']
  const result = document.getElementById('dominio')
  
  let dominios = '';
  pronoun.forEach((pronouns) => {
    adj.forEach((adjs)=>{
      noun.forEach((nouns) => {
        extension.forEach((extensions) =>{
           dominios += (`${pronouns}${adjs}${nouns}${extensions}<br>`)
          
        });
        
      });
    });
  });
  result.innerHTML = dominios
  console.log(dominios);

  

};
