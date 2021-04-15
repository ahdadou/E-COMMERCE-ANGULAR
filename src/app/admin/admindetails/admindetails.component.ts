import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../../share/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.css']
})
export class AdmindetailsComponent implements OnInit {

  constructor(private productService: ProductService,
              private toastrService: ToastrService,
              private router: Router
              ) { }

  ngOnInit(): void {
  }

}
