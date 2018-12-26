import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BaseApi} from '../../../../../../shared/core/base-api';
import {PriceModel} from '../../model/price.model';

@Component({
  selector: 'nps-add-manicure-price',
  templateUrl: './add-manicure-price.component.html',
  styleUrls: ['./add-manicure-price.component.scss']
})
export class AddManicurePriceComponent implements OnInit {

  constructor(private baseApi: BaseApi) { }
  @Output() onPriceAdded = new EventEmitter<PriceModel>();

  ngOnInit() {
  }

  onSubmit(f) {
    let {title, price, category} = f.value;
    if (price < 0) price *= -1;
    console.log(f.category);
    const newPrice = new PriceModel(title, price, category);
    this.baseApi.post('price', newPrice)
      .subscribe((newPrice: PriceModel) => {
        f.reset();
        f.form.patchValue({price: 1});
        this.onPriceAdded.emit(newPrice);
      });
  }
}
