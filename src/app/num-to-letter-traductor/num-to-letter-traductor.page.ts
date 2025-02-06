import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonButtons, IonTitle, IonToolbar, IonMenuButton, IonInput, IonItem , IonList , IonLabel,IonButton,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle   } from '@ionic/angular/standalone';

@Component({
  selector: 'app-num-to-letter-traductor',
  templateUrl: './num-to-letter-traductor.page.html',
  styleUrls: ['./num-to-letter-traductor.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButtons, IonTitle, IonMenuButton, IonToolbar, CommonModule, FormsModule, IonInput, IonItem , IonList , IonLabel,IonButton,ReactiveFormsModule,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle  ]
})
export class NumToLetterTraductorPage implements OnInit {

  Result:string = "";
  Num = new FormControl('');
  numberToUse: number = 0;
  letterCount: number = 0;
  constructor() { }

  ngOnInit() {
  }
  
  // getNumLetters(){
  //   this.numberToUse = Number(this.Num.value);
    
   
  // }

  getNumLetters() {
    this.numberToUse = Number(this.Num.value);
    const word = this.numWords(this.numberToUse); // Convert number to words
    this.letterCount = word.replace(/[\s-]/g, '').length; // Remove spaces & hyphens
  }
  words: string[] = [
    "Cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve",
    "diez", "once", "doce", "trece", "catorce", "quince", "dieciséis",
    "diecisiete", "dieciocho", "diecinueve"
  ];
  
  tens: string[] = [
    "", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"
  ];
  hundreds: string[] = [
    "", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", 
    "seiscientos", "setecientos", "ochocientos", "novecientos"
  ];
  numWords(n: number): string {

    if (n < 20) 
      return this.Result = this.words[n];

    if (n < 100) 
      return this.Result =  this.tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " y " + this.words[n % 10] : "");

    if (n < 1000){
      if(n < 200 && n > 100)  return this.Result =  this.hundreds[Math.floor(n / 100)] + "to " + (n % 100 !== 0 ? this.numWords(n % 100) : "");
      return this.Result =  this.hundreds[Math.floor(n / 100)] + " " + (n % 100 !== 0 ? this.numWords(n % 100) : "");
    }
    if(n === 1000)
      return this.Result = "mil";

    return this.Result = "El numero esta por encima de mil";
  }

  restart(){
    this.Result = "";
    this.Num.setValue("");
    this.numberToUse = 0;
    this.letterCount = 0;
  }
}
