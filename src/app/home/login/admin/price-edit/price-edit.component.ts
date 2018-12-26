import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {PriceModel} from './model/price.model';
import {BaseApi} from '../../../../shared/core/base-api';

@Component({
  selector: 'nps-price-edit',
  templateUrl: './price-edit.component.html',
  styleUrls: ['./price-edit.component.scss']
})
export class PriceEditComponent implements OnInit {
  form: FormGroup;
  baseApi: BaseApi;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(price) {
    // this.baseApi.post('price', price);
    console.log(price.value);
  }

}
