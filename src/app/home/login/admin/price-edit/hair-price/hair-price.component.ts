import { Component, OnInit } from '@angular/core';
import {BaseApi} from '../../../../../shared/core/base-api';
import {PriceModel} from '../model/price.model';
import {Message} from '../../../shared/model/message.model';

@Component({
  selector: 'nps-hair-price',
  templateUrl: './hair-price.component.html',
  styleUrls: ['./hair-price.component.scss']
})
export class HairPriceComponent implements OnInit {
  price: PriceModel[] = [];
  message: Message;
  constructor(private baseApi: BaseApi) { }

  ngOnInit() {
    this.message = new Message('');
    this.baseApi.get('hair')
      .subscribe((price: any) => {
        this.price = price;
      });
  }

  newPriceAdded(p: PriceModel) {
    this.price.push(p);
  }

  Update(title: string, price: number, id: number) {
    const data: PriceModel = {title, price, id};
    this.baseApi.put(`hair/${id}`, data )
      .subscribe((data: PriceModel ) => {
        this.message.text = 'Категория успешно отредактирована!';
        window.setTimeout(() => this.message.text = '', 5000);
      });
  }

  Remove(price: PriceModel) {
    const id = price.id;
    this.baseApi.delete(`hair/${id}`)
      .subscribe((data: any) => {
        this.price = this.price.filter(p => p !== price);
        this.message.text = 'Категория успешно удалена!';
        window.setTimeout(() => this.message.text = '', 5000);
      });
  }

}
