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

      class Car {
        rego: string;
        speed: number;
        maxSpeed:number = 120;

        constructor(_rego: string, _speed: number){
          this.rego = _rego;
          this.speed = _speed;
        }

        increaseSpeed(spd: number): void{
          this.speed += spd;

          if(this.speed > this.maxSpeed){
            this.speed = this.maxSpeed
          }
        }
      }
      const car1: Car = new Car("TEST123", 20);
      console.log(car1);
      car1.increaseSpeed(140);
      console.log(car1);

      let innerHTML: string = ' ';

      const carDropdown: HTMLElement = document.getElementById('cars');
      const cars: string[] = ["car1", "car2", "car3"];

      for (let i = 0; i < cars.length; i++){
        innerHTML += `<option value=${cars[i]}> ${cars[i]} </option>`
      }
      carDropdown.innerHTML = innerHTML;