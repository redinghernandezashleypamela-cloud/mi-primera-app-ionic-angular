import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard,
  IonCardHeader, IonCardTitle, IonCardContent, IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink, IonHeader, IonToolbar, IonTitle, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton
  ],
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Acerca del proyecto</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card>
        <ion-card-header>
          <ion-card-title>¿Qué tecnologías usamos?</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <p><strong>Ionic:</strong> componentes visuales adaptables para web y móvil.</p>
          <p><strong>Angular:</strong> componentes, lógica y rutas de la aplicación.</p>
          <p><strong>Express:</strong> servidor pequeño que entrega los archivos publicados.</p>
          <ion-button routerLink="/" expand="block">Volver al inicio</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `
})
export class AboutPage {}
