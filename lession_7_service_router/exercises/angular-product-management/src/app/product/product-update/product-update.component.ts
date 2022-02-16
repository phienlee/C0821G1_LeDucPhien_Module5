import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id: number;
  productForm: FormGroup;

  constructor(private service: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      this.id = +paramMap.get('id');
      const product = this.findById(this.id);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      })
    })
  }

  ngOnInit(): void {
  }

  findById(id: number){
    return this.service.getProductById(id);
  }

  onSubmit(id: number){
    const product = this.productForm.value;
    this.service.updateById(id, product);
    alert('Cap nhat thanh cong')
  }
}
