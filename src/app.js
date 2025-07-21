import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extension = ['.com', '.net']
  let dominios = [];
  
  pronoun.forEach((pronouns) => {
    adj.forEach((adjs)=>{
      noun.forEach((nouns) => {
        extension.forEach((extensions) =>{
          dominios.push(`${pronouns}${adjs}${nouns}${extensions}`)
        });
        
      });
    });
  });
  console.log(dominios);

  document.getElementById('dominio').innerHTML = dominios.join('<br>');

};
