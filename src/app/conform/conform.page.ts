import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-conform',
  templateUrl: './conform.page.html',
  styleUrls: ['./conform.page.scss'],
})
export class ConformPage implements OnInit {

  constructor(private modCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modCtrl.dismiss();
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }
}
