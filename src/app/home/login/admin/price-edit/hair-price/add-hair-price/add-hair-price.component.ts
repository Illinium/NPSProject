import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BaseApi} from '../../../../../../shared/core/base-api';
import {PriceModel} from '../../model/price.model';

@Component({
  selector: 'nps-add-hair-price',
  templateUrl: './add-hair-price.component.html',
  styleUrls: ['./add-hair-price.component.scss']
})
export class AddHairPriceComponent implements OnInit {

  constructor(private baseApi: BaseApi) { }
  @Output() onPriceAdded = new EventEmitter<PriceModel>();

  ngOnInit() {
  }

  onSubmit(f) {
    let {title, price} = f.value;
    if (price < 0) price *= -1;
    const newPrice = new PriceModel(title, price);
    this.baseApi.post('hair', newPrice)
      .subscribe((newPrice: PriceModel) => {
        f.reset();
        f.form.patchValue({price: 1});
        this.onPriceAdded.emit(newPrice);
      });
  }
}
