export class Empleado{
    //pasamos los parametros
constructor(nombre:string, apellido:string, cargo:string, salario:number){
//iniciamos los campos de clase, pasando el nombre de clase y su propiedad
    this.nombre=nombre;
    this.apellido=apellido;
    this.cargo=cargo;
    this.salario=salario;

}

//propiedades
nombre:string="";
apellido:string="";
cargo:string="";
salario:number=0;
}