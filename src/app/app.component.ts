import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'nps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'nps';

  constructor(private router: Router){

  }

  ngOnInit(){
  //   this.router.navigate(['/home']);
  //
    }
}
