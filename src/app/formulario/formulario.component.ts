import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  titulo: string = "Formulario de Contacto";
  nombre: string = "";
  mensaje: string = "";
  registro: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  enviarFormulario(event: any) {
     console.log("Formulario enviado");
      this.registro = true;
   
  }

}
