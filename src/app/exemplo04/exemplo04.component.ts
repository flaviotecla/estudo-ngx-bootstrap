import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-exemplo04',
  templateUrl: './exemplo04.component.html',
  styleUrls: ['./exemplo04.component.css']
})
export class Exemplo04Component implements OnInit {

  modalRef: BsModalRef = new BsModalRef();
  items: any[];

  constructor(private modalService: BsModalService) {
    this.items = Array(15).fill(0);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  
  ngOnInit(): void {
  }

}
