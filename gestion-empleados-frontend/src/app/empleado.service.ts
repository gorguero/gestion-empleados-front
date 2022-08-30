import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Obtiene el listado de todos los empleados
  private URL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient:HttpClient) { }

  //Metodo para obtener los empleados
  getListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.URL}`);
  }

  //Metodo para crear/registrar un empleado
  createEmpleado(empleado:Empleado):Observable<Object>{
    return this.httpClient.post(`${this.URL}`, empleado);
  }

  eliminarEmpleado(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.URL}/${id}`);
  }

  //este metodo sirve para editar el empleado
  editarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.URL}/${id}`,empleado);
  }

  //este metodo sirve para obtener o buscar un empleado
  obtenerEmpleado(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.URL}/${id}`);
  }

}
