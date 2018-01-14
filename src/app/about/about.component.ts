import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  private subscription: any;
  id:number;
  goals:any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
    this.subscription = this.route.params.subscribe(res => {
        this.id = +res['id'];
      }
    );
  }

  ngOnInit() {
    this._data.goal.subscribe(res=>this.goals=res);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }
}
