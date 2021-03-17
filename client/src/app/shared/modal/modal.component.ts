import { Component, OnInit, ElementRef, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'orang-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Input() id: string;
  private element: any;

  constructor(private modalService: ModalService, private el: ElementRef) { 
    this.id = '';
    this.element = el.nativeElement;
  }

  ngOnInit(): void {

    //ensure id exists
    if (!this.id && this.id !== ''){
      console.error('modal must have an id');
      return;
    }

    // put at the botim of body so it will overlay everything
    document.body.appendChild(this.element);

    // close on background click
    this.element.addEventListener('click', el =>{
      if (el.target.classNname){
        this.close();
      }
    })
  }

}
