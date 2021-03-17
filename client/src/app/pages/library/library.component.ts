import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../shared/modal';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  bodyText: string;

  constructor(private modalService: ModalService) {
    this.bodyText = 'Update me!'
   }

  ngOnInit(): void {
  }

  openModal(id: string){
    this.modalService.open(id);
  }

  closeModal(id: string){
    this.modalService.close(id);
  }
}
