import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { rocketOutline, informationCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
    IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Mi primera app</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>¡Hola! Bienvenido/a</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Esta aplicación combina <strong>Ionic</strong> para la interfaz
          y <strong>Angular</strong> para la estructura y navegación.
          <p>Está lista para construir y publicar como aplicación web.</p>
          <ion-button expand="block" (click)="saludar()">
            <ion-icon slot="start" name="rocket-outline"></ion-icon>
            Probar aplicación
          </ion-button>
          <ion-button expand="block" fill="outline" routerLink="/acerca">
            <ion-icon slot="start" name="information-circle-outline"></ion-icon>
            Acerca del proyecto
          </ion-button>
          @if (mensaje) {
            <p class="mensaje">{{ mensaje }}</p>
          }
        </ion-card-content>
      </ion-card>
    </ion-content>
  `,
  styles: [`.mensaje { margin-top: 18px; font-weight: 600; color: var(--ion-color-primary); }`]
})
export class HomePage {
  mensaje = '';

  constructor() {
    addIcons({ rocketOutline, informationCircleOutline });
  }

  saludar() {
    this.mensaje = '¡Funciona! Ionic y Angular están trabajando juntos.';
  }
}
