/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];

window.onload = function() {
  //write your code here
  //call de lafuncion en onload
  combineAllPossibilitiesOfThreeArray(pronoun, adj, noun);
  //console.log("Hello Rigo from the console!");
};

//we declare function thet receive 3 arrays
function combineAllPossibilitiesOfThreeArray(arr1, arr2, arr3) {
  //declare an empty array to return all combinations
  const domains = [];
  let dom = ".com";

  //loop for the first combination
  for (let i = 0; i < arr1.length; i++) {
    //domains.push(arr1[i] + arr2[i] + arr3[i] + dom);
    for (let j = 0; j < arr1.length; j++) {
      //console.log("entro en primero " + arr1[i]);

      //domains.push(arr1[i] + arr2[i] + arr3[i] + dom);
      for (let k = 0; k < arr1.length; k++) {
        //console.log("entro en primero " + arr1[i]);

        domains.push(arr1[i] + arr2[j] + arr3[k] + dom);
      }
    }
  }
  //change order of second array

  arr2.reverse();

  for (let i = 0; i < arr1.length; i++) {
    //domains.push(arr1[i] + arr2[i] + arr3[i] + dom);
    for (let j = 0; j < arr1.length; j++) {
      //console.log("entro en primero " + arr1[i]);

      //domains.push(arr1[i] + arr2[i] + arr3[i] + dom);
      for (let k = 0; k < arr1.length; k++) {
        //console.log("entro en primero " + arr1[i]);

        domains.push(arr1[i] + arr2[j] + arr3[k] + dom);
      }
    }
  }
  //return new array with all combinations
  return domains;
}

//add array to HTML by id and position
document.getElementById("demo").innerHTML = combineAllPossibilitiesOfThreeArray(
  pronoun,
  adj,
  noun
)[0];
document.getElementById(
  "demob"
).innerHTML = combineAllPossibilitiesOfThreeArray(pronoun, adj, noun)[1];
document.getElementById(
  "demo2"
).innerHTML = combineAllPossibilitiesOfThreeArray(pronoun, adj, noun)[2];
document.getElementById(
  "demo2b"
).innerHTML = combineAllPossibilitiesOfThreeArray(pronoun, adj, noun)[3];
document.getElementById(
  "demo3"
).innerHTML = combineAllPossibilitiesOfThreeArray(pronoun, adj, noun)[4];
document.getElementById(
  "demo3b"
).innerHTML = combineAllPossibilitiesOfThreeArray(pronoun, adj, noun)[5];
document.getElementById(
  "demo4"
).innerHTML = combineAllPossibilitiesOfThreeArray(pronoun, adj, noun)[6];
document.getElementById(
  "demo4b"
).innerHTML = combineAllPossibilitiesOfThreeArray(pronoun, adj, noun)[7];
