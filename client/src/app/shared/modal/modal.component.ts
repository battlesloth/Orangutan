import { Component, OnInit, ElementRef, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';

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
    if (!this.id || this.id === ''){
      console.error('modal must have an id');
      return;
    }

    // put at the botim of body so it will overlay everything
    document.body.appendChild(this.element);

    // close on background click
    this.element.addEventListener('click', (el : any) =>{
      if (el.target.className === 'orang-modal'){
        this.close();
      }
    });

    this.modalService.add(this);
  }

  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  open(): void {
    this.element.style.display = 'block';
    let test = this.element.id;
    document.body.classList.add('orang-modal-open');
  }

  close() {
     this.element.style.display = 'none';
     document.body.classList.remove('orang-modal-open');
  }

}
