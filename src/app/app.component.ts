import { Component } from '@angular/core';
import { LoadingService } from './loading.service';
import { HttpcallService } from './httpcall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progressSpinner';
  isLoading= this.loader._loading
  constructor(public loader: LoadingService,private http:HttpcallService){}
  getAll(){
    this.http.getAll().subscribe((res)=>{
      console.log(res)
    })
  }
}
