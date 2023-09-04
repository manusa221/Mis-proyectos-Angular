import { Component } from '@angular/core';
//importamos la clase Empleado
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';
  //creo  propiedades para poder enlazar con un box in banana
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  //vamos a crear un array que le pasaremos la clase empleado que hemos creado, para mostra algunos empleados
  empleados: Empleado[]=[

    //instanciamos empleados

    new Empleado("Manuel","Sanz","Presidente",8000),
    new Empleado("Elisabet","Frnz","Directora",8000),
    new Empleado("Biel","Sanz","Gerente",5000),
    new Empleado("Nadia","Sanz","Jefa",5000),
    new Empleado("Manuel","lopéz","Administrativo",2000),


  ];
//método para agregar empleados desde el formulario
agregarEmpleado(){
//creamos una variable donde almacenaremos los objetos de la clase empleado, con los argumentos de cada cuadro conde ira el nombre, apellido, cargo y salario
  let miEmpleado= new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo,this.cuadroSalario);
//una vez guardado todos los datos en miEmpleado, tenemos que agrgar está información al array. al array empleados añadimos con un push miEmpleado
  this.empleados.push(miEmpleado);


}
}