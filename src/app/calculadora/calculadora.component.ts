import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  first: number = 0;
  second: number = 0;
  resultado: number = 0;
  exception: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  sumar(event: any) {
    return this.resultado = this.first + this.second;
  }

  restar(event: any) {
    return this.resultado = this.first - this.second;
  }

  multiplicar(event: any) {
    return this.resultado = this.first * this.second;
  }

  dividir(event: any) {
    if(this.first >= 1){
      return this.resultado = this.first / this.second;
    }else{
      return this.exception = "Introducir un Numero igual o mayor a 1";
    }
  }

  reset(event: any) {
    this.first = 0;
    this.second = 0;
    this.resultado = 0;
  }

}
