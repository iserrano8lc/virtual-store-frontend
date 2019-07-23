import { Component, OnInit, Input } from '@angular/core';
import { PreferenceOptionsModel } from 'src/app/shared/models/preference-options-model';
import { SelectItem } from 'primeng/components/common/selectitem';
import { PreferenceValueModel } from 'src/app/shared/models/preference-value-model';

@Component({
  selector: 'app-preference-values',
  templateUrl: './preference-values.component.html',
  styleUrls: ['./preference-values.component.css']
})
export class PreferenceValuesComponent implements OnInit {

  @Input() prefValue: PreferenceOptionsModel;

  valueOptions: SelectItem[];

  selectedPref: PreferenceValueModel;

  constructor() { }

  ngOnInit() {
    this.valueOptions = [];
    this.valueOptions.push({
      label: 'Selecciona ' + this.prefValue.preferenceName,
      value: null
    });

    this.prefValue.values.forEach(val => {
      this.valueOptions.push({
        label: val,
        value: { preferenceName: this.prefValue.preferenceName, chosenValue: val }
      });
    });
  }

}
