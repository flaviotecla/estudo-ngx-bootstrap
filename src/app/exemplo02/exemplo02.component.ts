import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from '../modal-content/modal-content.component';


@Component({
  selector: 'app-exemplo02',
  templateUrl: './exemplo02.component.html',
  styleUrls: ['./exemplo02.component.css']
})
export class Exemplo02Component implements OnInit {

  bsModalRef: BsModalRef = new BsModalRef();

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  openModalWithComponent() {
    const initialState = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
  
}
