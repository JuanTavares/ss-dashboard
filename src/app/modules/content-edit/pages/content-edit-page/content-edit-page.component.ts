import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgbModal, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-content-edit-page',
  templateUrl: './content-edit-page.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./content-edit-page.component.css']
})
export class ContentEditPageComponent {

  tinyMceSettings = {
    inline: false,
    statusbar: false,
    browser_spellcheck: true,
    height: 320
  };
  modal: any;

  constructor(
    private modalService: NgbModal
    ) { }

  openModal(content) {
    this.modal = this.modalService.open(content, { centered: true });
  }

  close() {
    this.modal.close();
  }
}
