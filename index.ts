const output: HTMLElement = document.getElementById ('output');
const button: HTMLElement = document.getElementById('custom-btn');
button .addEventListener('click', fizzbuzz);

function fizzbuzz() {
  const startNumInput: HTMLInputElement = <HTMLInputElement>(document.getElementById('start-num'));
  const startNumVal: number = Number(startNumInput.value);

  const endNumInput: HTMLInputElement = <HTMLInputElement>(document.getElementById('end-num'));
  const endNumVal: number = Number(endNumInput.value);

  console.log(startNumVal);
  console.log(endNumVal);

  for (let i = startNumVal; i <= endNumVal; i++){
    if (i% 3 == 0 && i % 5 == 0){
      output.innerHTML += '<div>fizzbuzz ' + i + '</div>';}
      else if (i % 3 == 0){
        output.innerHTML += '<div>fizz ' + i + '</div>';}
        else if (i % 5 == 0){
          output.innerHTML += '<div>buzz ' + i + '</div>';}
        }
      }
