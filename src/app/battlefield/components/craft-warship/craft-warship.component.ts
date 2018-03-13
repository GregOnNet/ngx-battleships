import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-craft-warship',
  templateUrl: './craft-warship.component.html',
  styleUrls: ['./craft-warship.component.scss']
})
export class CraftWarshipComponent implements OnInit {
  selectedWarship = {};
  warshipForm: FormGroup;
  warships: any[];

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.warshipForm = this._fb.group({
      warship: ['']
    });

    this.warships = [this.warship('Submarine'), this.warship('Destroyer')];
  }

  updateCurrentWarship(warship) {
    this.selectedWarship = warship;
  }

  warship(type: string) {
    return {
      type,
      icon: type.toLowerCase()
    };
  }
}
