import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-exemplo05',
  templateUrl: './exemplo05.component.html',
  styleUrls: ['./exemplo05.component.css']
})
export class Exemplo05Component implements OnInit {

  modalRef: BsModalRef = new BsModalRef();
  message: string = "Click me";
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm', backdrop: 'static', keyboard: false});
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

}
