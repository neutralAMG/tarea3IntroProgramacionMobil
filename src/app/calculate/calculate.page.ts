import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonTitle, IonToolbar, IonMenuButton, IonInput, IonItem, IonList , IonLabel ,IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.page.html',
  styleUrls: ['./calculate.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButtons, IonTitle, IonMenuButton, IonToolbar, CommonModule, ReactiveFormsModule, FormsModule,IonInput, IonItem, IonList,IonLabel,IonButton  ]
})
export class CalculatePage implements OnInit {
  Num1 = new FormControl('');
  Num2 = new FormControl('');
  Result:Number = 0;
  constructor() { }

  ngOnInit() {
  }

  sum(){
    this.Result = Number(this.Num1.value) + Number(this.Num2.value);
  }
  restart(){
    this.Result = 0;
    this.Num1.setValue("");
    this.Num2.setValue("");
  }
}
