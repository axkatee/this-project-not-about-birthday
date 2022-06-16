import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Pages} from '@consts';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void { }


  redirect(): void {
    this._router.navigate([Pages.Main]);
  }
}
