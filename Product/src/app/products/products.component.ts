import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor( private toastr: ToastrService ) { }

  ngOnInit(): void {
  }
  
  pwdPattern = "^[a-z A-Z _ 0-9]{6,12}$";
  emailPattern = "^[a-z0-9.+]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  public userForm= new FormGroup({
    email: new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
    password: new FormControl('',[Validators.required,Validators.pattern(this.pwdPattern)])
  });

  onSubmit(){
    this.toastr.info('Email: '+this.userForm.controls["email"].value+' <br/> Password: '+this.userForm.controls["password"].value+' ','', { enableHtml: true});
    console.log(this.userForm.controls['email'].value);
  }

  public beforePanelOpened(){
    this.userForm.controls['email'].setValue("");
    this.userForm.controls['password'].setValue("");
  }

}
