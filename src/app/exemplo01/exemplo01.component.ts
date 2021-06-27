import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-exemplo01',
  templateUrl: './exemplo01.component.html',
  styleUrls: ['./exemplo01.component.css']
})
export class Exemplo01Component implements OnInit {

  modalRef: BsModalRef = new BsModalRef();
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
