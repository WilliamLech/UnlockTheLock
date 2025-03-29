import {Component, inject, Input} from '@angular/core';
import {TentativeCadena} from '../../class/tentativeCadena';
import {NgClass} from '@angular/common';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modale-resultat',
  imports: [
    NgClass,
  ],
  templateUrl: './modale-resultat.component.html',
  styleUrl: './modale-resultat.component.css'
})
export class ModaleResultatComponent {
  @Input() historique: TentativeCadena[] = [];

  readonly dialogRef= inject(MatDialogRef<ModaleResultatComponent>);

  recomencer() {
    this.dialogRef.close();
  }

}
