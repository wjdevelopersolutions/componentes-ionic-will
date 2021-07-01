import { Component, OnInit } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  constructor( private actionSheetCtrl: ActionSheetController ) { }

  ngOnInit() {
  }

  async onClick() {

    // Mostrar action sheet
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albunes',
      mode: 'md',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Compartir',
          icon: 'share-social-outline',
          handler: () => {
            console.log('Compartir imagen');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancelando ...');
          }
        }
      ]
    });

    actionSheet.present();

  }



}
