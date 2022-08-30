import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado:Empleado = new Empleado();

  constructor(private empleadoService:EmpleadoService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.createEmpleado();
  }

  createEmpleado(){
    this.empleadoService.createEmpleado(this.empleado).subscribe(data => {
      console.log(data);
      this.irListaEmpleados();
    }, error => console.log(error));
  }

  irListaEmpleados(){
    this.router.navigate(['/empleados']);
  }

}
