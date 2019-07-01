import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactoService } from '../../service/contacto.service';
import { Contactos } from '../../models/contactos';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(public contactoService:ContactoService) { }

  ngOnInit() {
  }
  onSubmit(contactoForm:NgForm){
    this.contactoService.insertContacto(contactoForm.value);
  }

}




