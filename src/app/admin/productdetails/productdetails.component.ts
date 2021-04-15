import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../../share/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  myForm: FormGroup;
  imgURL: any;
  videPicture = 'assets/videPicture.png';
  category;
  selectedFile: File;


    constructor(private productService: ProductService,
                private toastr: ToastrService,
                private router: Router,
                private fb: FormBuilder
                ) { }

  ngOnInit(): void {
    this.createForm();
    this.getCategories();
  }


  createForm(): any{
      this.myForm = this.fb.group({
      name: ['', []],
      price: ['', []],
      short_description: ['', []],
      long_description: ['', []],
      quantite: ['', []],
      category: ['', []],
    });
  }

  onFileChanged(event): any{
    this.selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
    reader.onload = () => {
      this.imgURL = reader.result;
    }
  }




  save(): any{

    let formData=new FormData();
    formData.append('files', this.selectedFile);

    let pro = new Product();

    pro.name = this.myForm.get('name').value;
    pro.price = this.myForm.get('price').value;
    pro.short_description = this.myForm.get('short_description').value;
    pro.long_description = this.myForm.get('long_description').value;
    pro.quantite = this.myForm.get('quantite').value;
    pro.category = this.myForm.get('category').value;
    formData.append('productForm', JSON.stringify(pro));


    this.productService.saveProduct(formData).subscribe(
      p => {this.toastr.success(`Add product successfully`, 'Add successfully', {
        timeOut: 1500,
        progressBar: true,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right'
      });
    },
    err => {this.toastr.error(`Can't Add product`, 'Add Error', {
      timeOut: 1500,
      progressBar: true,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right'
    });
    }
    );
  }

  getCategories(): any{
    this.productService.getCategories().subscribe(
      p => this.category = p,
      e => console.log(e)
    );
  }

}


export class Product{
  name: string;
  price: number;
  short_description: string;
  long_description: string;
  quantite: number;
  category: string;
  // files: string;
}
