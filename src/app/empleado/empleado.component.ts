import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {
  nombre: string = "Jesus Christ";
  apellido: string = "Gonzalez";
  private edad: number = 30;
  // empresa: string = "Buenos Aires";

  constructor() { }

  ngOnInit(): void {
  }

  getEdad(): number {
    return this.edad;
  }
  changeEmpresa(empresa: string) {
    return empresa;
  }

}
