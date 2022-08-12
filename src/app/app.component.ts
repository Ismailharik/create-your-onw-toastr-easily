import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Toaster';
  show: boolean=false;
  alertProgress: number=0;

  showAlert(){
    this.show=true;
    let myInterval=setInterval(()=>{
      this.alertProgress+=10;
      // YOU CAN ADJUST DELAI
    },300)
    setTimeout(()=>{
      this.show=false
      
      //stop increasing progress
      clearInterval(myInterval);
      this.alertProgress=0;

    },3000)
  }


}
