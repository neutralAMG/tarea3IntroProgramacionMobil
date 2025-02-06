import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle , IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-personal-expiriance',
  templateUrl: './personal-expiriance.page.html',
  styleUrls: ['./personal-expiriance.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle , IonLabel]
})
export class PersonalExpiriancePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
