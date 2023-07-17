import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {
  nombre: string = "Jesus Christ";
  apellido: string = "Gonzalez";
  private edad: number = 30;
  empresa: string = "Tesla Corporation";

  constructor() { }

  ngOnInit(): void {
  }

  getEdad(): number {
    return this.edad;
  }
  changeEmpresa(empresa: string) {
    return empresa;
  }

  stateDisabled: boolean = true;

  textoRegistro: string = "No hay nadie Registrado";
  textoSaludo: string = "Hola Visitiante";
  
  verificarRegistro(event: any) {
    //  alert("Usuario Registrado");
    if ((<HTMLInputElement>event.target).value === "yes"){
      this.textoRegistro ="Usuario Registrado";
      this.textoSaludo ="Hola Usuario Registrado";
    }else{
      this.textoRegistro = "Usuario NO Registrado";
      this.textoSaludo = "Hola Usuario No Registrado";
    }
    
  }

  cambiarEmpresa(event: any) {
    this.empresa = (<HTMLInputElement>event.target).value;
  }


}
