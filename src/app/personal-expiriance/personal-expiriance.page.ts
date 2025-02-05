import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonTitle, IonToolbar, IonMenuButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-personal-expiriance',
  templateUrl: './personal-expiriance.page.html',
  styleUrls: ['./personal-expiriance.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButtons, IonTitle, IonMenuButton, IonToolbar, CommonModule, FormsModule]
})
export class PersonalExpiriancePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
