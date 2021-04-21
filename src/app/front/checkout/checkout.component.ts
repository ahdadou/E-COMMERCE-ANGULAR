import { OrdersService } from './../../share/orders.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder,private odersService: OrdersService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): any{
    this.myForm = this.fb.group({
      firstname: ['', []],
      lastname: ['', []],
      phone: ['', []],
      address: ['', []],
      address2: ['', []],
      city: ['', []],
      zipCode: ['', []],
    });
  }


  goSubmit(){
    this.odersService.addNewOrders(this.myForm.value).subscribe(
     (res) => console.log(res),
     (err) => console.log("error : " + err),
    )
  }

}
