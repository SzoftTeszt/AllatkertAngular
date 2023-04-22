import { Component } from '@angular/core';
import { Allat } from '../allat';
import { BaseService } from '../service/base.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uj-allat',
  templateUrl: './uj-allat.component.html',
  styleUrls: ['./uj-allat.component.css']
})
export class UjAllatComponent {
 ujAllat:Allat={};
 ujAllatForm!:FormGroup;
 aktDatum= new Date().toJSON().slice(0,10);
 gondozok:any=null;

  showError=false;
  errorMessage="";
  showErrorGondozo=false;
  errorMessageGondozo="";

 constructor(private base:BaseService, 
  private fb:FormBuilder,
  private router:Router)
 {}

 ngOnInit(){
    this.ujAllatForm=this.fb.group({
        nev:['',[Validators.required]],
        faj:['',[Validators.required]],
        erkezes:[this.aktDatum,[Validators.required]],
        helye:['',[Validators.required]],
        gondozo:['unset',[Validators.required]],
    });
    this.base.getAllGondozo().subscribe({
      next:res=>{this.gondozok=res},
      error:res=>{this.showErrorGondozo=true; this.errorMessageGondozo=res.message},
    });
 }

 addAnimal(body:any){
  if (body.gondozo=="unset")
  {
    this.showErrorGondozo=true;
    this.errorMessageGondozo="Gondozó kitöltése kötelező";
  }
  else
    this.base.setNewAnimal(body).subscribe(
      {
          next:()=>this.router.navigate(['/allataink']),
          error:err=>{
            this.showError=true;
            this.errorMessage=err.message;
          }
      }
    )
 }
}
