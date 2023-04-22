import { Component } from '@angular/core';
import { BaseService } from '../service/base.service';

@Component({
  selector: 'app-allataink',
  templateUrl: './allataink.component.html',
  styleUrls: ['./allataink.component.css']
})
export class AllatainkComponent {
  allatok:any;
  oszlopok=["id", "nev", "faj", "erkezes", "helye", "gondozo"];

  showError:boolean=false;
  errorMessage="";

  constructor(private base:BaseService){
    this.base.getAllAnimals().subscribe(
        {
          next:res=>{this.allatok=res},

          error:err=>{
              this.showError=true;
              this.errorMessage=err.message;
            } 
        }
      );
  }

  refresh(){
    window.location.reload();
  }
}
