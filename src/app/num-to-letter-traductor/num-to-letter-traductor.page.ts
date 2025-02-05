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

  numWords(n: number): string {
    const words: string[] = [
      "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
      "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen",
      "seventeen", "eighteen", "nineteen"
    ];
    
    const tens: string[] = [
      "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    ];
    
    if (n < 20) return this.Result = words[n];
    if (n < 100) return this.Result =  tens[Math.floor(n / 10)] + (n % 10 !== 0 ? "-" + words[n % 10] : "");
    if (n < 1000)
      return this.Result = words[Math.floor(n / 100)] + " hundred" + (n % 100 !== 0 ? " and " + this.numWords(n % 100) : "");
    
    return this.Result = "one thousand"; // Handles only up to 1000
  }

  restart(){
    this.Result = "";
    this.Num.setValue("");
    this.numberToUse = 0;
    this.letterCount = 0;
  }
}
