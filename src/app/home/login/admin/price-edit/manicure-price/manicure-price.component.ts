import { Component, OnInit } from '@angular/core';
import {BaseApi} from '../../../../../shared/core/base-api';
import {PriceModel} from '../model/price.model';
import {Message} from '../../../shared/model/message.model';

@Component({
  selector: 'nps-manicure-price',
  templateUrl: './manicure-price.component.html',
  styleUrls: ['./manicure-price.component.scss']
})
export class ManicurePriceComponent implements OnInit {
  price: PriceModel[] = [];
  message: Message;
  constructor(private baseApi: BaseApi) { }

  ngOnInit() {
    this.message = new Message('');
    this.baseApi.get('price')
      .subscribe((price: any) => {
        this.price = price.filter(
          price => price.category === 'manicure'
        );
      });
  }

  newPriceAdded(p: PriceModel) {
    this.price.push(p);
  }

  Update(title: string, price: number, id: number) {
    const category = 'manicure';
    let data: PriceModel = {title, price, category, id};

    this.baseApi.post(`price/${id}`, data )
      .subscribe((data: PriceModel ) => {
        this.message.text = 'Категория успешно отредактирована!';
        window.setTimeout(() => this.message.text = '', 5000);
    });
  }

  Remove(id: number) {
    this.baseApi.delete(`price/${id}`)
      .subscribe((data: any) => {
        this.ngOnInit();
        this.message.text = 'Категория успешно удалина!';
        window.setTimeout(() => this.message.text = '', 5000);
      });
  }

}
