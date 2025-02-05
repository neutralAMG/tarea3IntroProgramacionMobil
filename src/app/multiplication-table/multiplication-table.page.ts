import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl,ReactiveFormsModule  } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonTitle, IonToolbar, IonMenuButton, IonInput, IonItem , IonList , IonLabel,IonButton , IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-multiplication-table',
  templateUrl: './multiplication-table.page.html',
  styleUrls: ['./multiplication-table.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButtons, IonTitle, IonMenuButton, IonToolbar, CommonModule, FormsModule, IonInput, IonItem, IonList , IonLabel ,IonButton,ReactiveFormsModule, IonCol, IonGrid, IonRow ]
})
export class MultiplicationTablePage implements OnInit {

  Num = new FormControl('');
  Result:Array<Number> = []
  constructor() { }

  ngOnInit() {
  }

  generateTable(){
 this.Result = this.Result.filter(n => n = -1)
    for(let i = 1; i<=13; i++){
      this.Result.unshift()
      this.Result.push(Number(this.Num.value) * i)
    }
  }

  restart(){
    this.Result = [];
    this.Num.setValue("")
  }

}
