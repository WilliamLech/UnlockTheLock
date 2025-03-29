import {Component, inject, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {TentativeCadena} from '../../class/tentativeCadena';
import {MatDialog} from '@angular/material/dialog';
import {ModaleResultatComponent} from '../modale-resultat/modale-resultat.component';
import {first} from 'rxjs';

@Component({
  selector: 'app-cadena',
  templateUrl: './cadena.component.html',
  imports: [
    NgClass
  ],
  styleUrl: './cadena.component.css'
})
export class CadenaComponent implements OnInit {
  dialog = inject(MatDialog);
  digits: number[] = [];
  nbEssaie: number = 0;
  resultatAttendu: number[] = [];
  digitBon: boolean[] = [];
  historiqueTentatives: TentativeCadena[] = [];

  ngOnInit(): void {
    this.intializeGame();
  }


  intializeGame(): void {
    this.digitBon = [];
    this.digits = [];
    this.resultatAttendu = [];
    this.historiqueTentatives = [];
    for (let i = 0; i < 4; i++) {
      this.digits.push(0);
      this.resultatAttendu.push(this.getRandomNumber());
      this.digitBon.push(false);
      this.nbEssaie = 0;
    }
  }


  getAllDigitsPossible(): number[] {
    let array = [];
    for (let i = 0; i < 10; i++) {
      array.push(i);
    }
    return array
  }

  getRandomNumber(): number {
    return Math.floor(Math.random() * (this.getAllDigitsPossible().length - 1));
  }

  valider() {
    for (let i = 0; i < this.digits.length; i++) {
      if (this.digits[i] == this.resultatAttendu[i]) {
        this.digitBon[i] = true;
      }
    }
    this.nbEssaie++;
    this.historiqueTentatives.push(new TentativeCadena(this.nbEssaie, structuredClone(this.digits), structuredClone(this.digitBon)));
    let isOk = true;
    for(let bool of this.digitBon) {
      if(!bool){
        isOk = false;
        break;
      }
    }
    if(isOk){
      const dialog = this.dialog.open(ModaleResultatComponent,{
        width: '30vw',
        height: '70vh',
        disableClose: true,
        enterAnimationDuration: 300
      })
      dialog.componentInstance.historique = this.historiqueTentatives;
      dialog.afterClosed().pipe(first()).subscribe(()=>{
        this.intializeGame();
      })
    }
  }

  addDigitValue(b: boolean, number: number) {
    if (!this.digitBon[number]) {
      if (b) {
        let result = ++this.digits[number];
        if (result > 9) {
          result = 0;
        }
        this.digits[number] = result
      } else {
        let result = --this.digits[number]
        if (result < 0) {
          result = 9;
        }
        this.digits[number] = result
      }
    }
  }

  autoClear() {
    this.digits = this.resultatAttendu;
  }
}
