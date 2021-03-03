import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ConformPage } from '../conform/conform.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  constructor(private nav: NavController,public modalController: ModalController) {}

  // async reg() {
  //   const modal = await this.modalController.create({
  //     component: ConformPage,
  //     cssClass: 'my-custom-class'
  //   });
  //   return await modal.present();
  //   // this.nav.navigateForward('/register');
  // }
  reg()
  {
    this.nav.navigateForward('/view');
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

