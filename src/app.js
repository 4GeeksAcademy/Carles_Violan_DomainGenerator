/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

//document.getElementById("demo").innerHTML = pronoun + adj + noun;

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

const domains = [];
const domainsb = [];
const domains2 = [];
const domains2b = [];
const domains3 = [];
const domains3b = [];
const domains4 = [];
const domains4b = [];

// todos los primeros

for (let i = 0; i < 1; i++) {
  //concatenation += pronoun[i] + " ";
  console.log("entro en primero " + pronoun[i]);

  domains.push(pronoun[i]);

  for (let j = 0; j < 1; j++) {
    //concatenation += adj[j] + " ";
    console.log("entro en segundo " + adj[j]);

    domains.push(adj[j]);

    for (let k = 0; k < 1; k++) {
      //concatenation += noun[k] + ".com" + " ";
      console.log("entro en tercero " + noun[k]);

      domains.push(noun[k] + ".com");
    }
  }
}

// todos los segundos

for (let i = 1; i < 2; i++) {
  //concatenation += pronoun[i] + " ";
  console.log("entro en primero " + pronoun[i]);

  domainsb.push(pronoun[i]);

  for (let j = 1; j < 2; j++) {
    //concatenation += adj[j] + " ";
    console.log("entro en segundo " + adj[j]);

    domainsb.push(adj[j]);

    for (let k = 1; k < 2; k++) {
      // concatenation += noun[k] + ".com" + " ";
      console.log("entro en tercero " + noun[k]);

      domainsb.push(noun[k] + ".com");
    }
  }
}

console.log(domains);
let text = domains.join(" ");
let textb = domainsb.join(" ");

/*segunda tanda de fors_ invertimos adj*/

adj.reverse();

console.log("invertimos adj");

for (let i = 0; i < 1; i++) {
  //concatenation += pronoun[i] + " ";
  console.log("entro en primero " + pronoun[i]);

  domains2.push(pronoun[i]);

  for (let j = 0; j < 1; j++) {
    //concatenation += adj[j] + " ";
    console.log("entro en segundo " + adj[j]);

    domains2.push(adj[j]);

    for (let k = 0; k < 1; k++) {
      //concatenation += noun[k] + ".com" + " ";
      console.log("entro en tercero " + noun[k]);

      domains2.push(noun[k] + ".com");
    }
  }
}

for (let i = 1; i < 2; i++) {
  // concatenation += pronoun[i] + " ";
  console.log("entro en primero " + pronoun[i]);

  domains2b.push(pronoun[i]);

  for (let j = 1; j < 2; j++) {
    //concatenation += adj[j] + " ";
    console.log("entro en segundo " + adj[j]);

    domains2b.push(adj[j]);

    for (let k = 1; k < 2; k++) {
      //concatenation += noun[k] + ".com" + " ";
      console.log("entro en tercero " + noun[k]);

      domains2b.push(noun[k] + ".com");
    }
  }
}

console.log(domains2);

let text2 = domains2.join(" ");
let text2b = domains2b.join(" ");

/*tercera tanda de fors_ invertimos noun*/
noun.reverse();

for (let i = 0; i < 1; i++) {
  //concatenation += pronoun[i] + " ";
  console.log("entro en primero " + pronoun[i]);

  domains3.push(pronoun[i]);

  for (let j = 0; j < 1; j++) {
    //concatenation += adj[j] + " ";
    console.log("entro en segundo " + adj[j]);

    domains3.push(adj[j]);

    for (let k = 0; k < 1; k++) {
      //concatenation += noun[k] + ".com" + " ";
      console.log("entro en tercero " + noun[k]);

      domains3.push(noun[k] + ".com");
    }
  }
}

for (let i = 1; i < 2; i++) {
  //concatenation += pronoun[i] + " ";
  console.log("entro en primero " + pronoun[i]);

  domains3b.push(pronoun[i]);

  for (let j = 1; j < 2; j++) {
    //concatenation += adj[j] + " ";
    console.log("entro en segundo " + adj[j]);

    domains3b.push(adj[j]);

    for (let k = 1; k < 2; k++) {
      //concatenation += noun[k] + ".com" + " ";
      console.log("entro en tercero " + noun[k]);

      domains3b.push(noun[k] + ".com");
    }
  }
}

console.log(domains3b);
let text3 = domains3.join(" ");
let text3b = domains3b.join(" ");

/* invertimos primer array*/

//pronoun.reverse();
noun.reverse();
adj.reverse();

for (let i = 1; i < 2; i++) {
  //concatenation += pronoun[i] + " ";
  console.log("entro en primero " + pronoun[i]);

  domains4.push(pronoun[i]);

  for (let j = 1; j < 2; j++) {
    //concatenation += adj[j] + " ";
    console.log("entro en segundo " + adj[j]);

    domains4.push(adj[j]);

    for (let k = 0; k < 1; k++) {
      //concatenation += noun[k] + ".com" + " ";
      console.log("entro en tercero " + noun[k]);

      domains4.push(noun[k] + ".com");
    }
  }
}

//

for (let i = 0; i < 1; i++) {
  //concatenation += pronoun[i] + " ";
  console.log("entro en primero " + pronoun[i]);

  domains4b.push(pronoun[i]);

  for (let j = 0; j < 1; j++) {
    //concatenation += adj[j] + " ";
    console.log("entro en segundo " + adj[j]);

    domains4b.push(adj[j]);

    for (let k = 1; k < 2; k++) {
      // concatenation += noun[k] + ".com" + " ";
      console.log("entro en tercero " + noun[k]);

      domains4b.push(noun[k] + ".com");
    }
  }
}

console.log(domains4);
let text4 = domains4.join(" ");
let text4b = domains4b.join(" ");

document.getElementById("demo").innerHTML = text;
document.getElementById("demob").innerHTML = textb;
document.getElementById("demo2").innerHTML = text2;
document.getElementById("demo2b").innerHTML = text2b;
document.getElementById("demo3").innerHTML = text3;
document.getElementById("demo3b").innerHTML = text3b;
document.getElementById("demo4").innerHTML = text4;
document.getElementById("demo4b").innerHTML = text4b;
