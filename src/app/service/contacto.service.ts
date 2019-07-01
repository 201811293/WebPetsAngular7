import { Injectable } from '@angular/core';
import { Contactos } from '../models/contactos';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {

	contactosList: AngularFireList<any>;
 	selectContatos: Contactos=new Contactos;

  constructor(private firebase:AngularFireDatabase) { 
    this.contactosList=this.firebase.list('contactos');
  }

  getContactos(){
    return this.contactosList=this.firebase.list('contactos');
  }

  //Metodo para agregar un contacto (CREATE)
  insertContacto(contactos:Contactos){
    this.contactosList.push({
      nombre:contactos.nombre,
      apellido:contactos.apellido,
      edad:contactos.edad,
      correo:contactos.correo,
      sexo:contactos.sexo,
      comentario:contactos.comentario
    })
  }

  //Metodo para Actulizar un contacto (UPDATE)
  udpateContacto(contactos:Contactos){
    this.contactosList.update(contactos.$key,{
      nombre:contactos.nombre,
      apellido:contactos.apellido,
      edad:contactos.edad,
      correo:contactos.correo,
      sexo:contactos.sexo,
      comentario:contactos.comentario
    })
  }

  //Metodo para Eliminar un contacto (DELETE)
  deleteContato($key:string){
    this.contactosList.remove($key);
  }
}
