import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonAlert, IonButton, IonCard, IonContent, IonHeader, IonToolbar, IonTitle, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonImg, IonLabel, ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [IonLabel, IonImg, IonCardSubtitle, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButton, IonAlert, IonHeader, IonContent, IonToolbar, IonTitle],
})
export class ProductCardComponent {

  cantidad: number = 1

  constructor(private alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: '',
      message: 'Ha agregado correctamente el producto a su carrito',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  quitarCantidad() {
    if (this.cantidad == 1) return;
    this.cantidad--;
  }

  agregarCantidad() {
    if (this.cantidad == 10) return;
    this.cantidad++;
  }



}
