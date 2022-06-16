import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter, map, Subject, takeUntil} from 'rxjs';
import {BIRTHDAY_TITLE, Pages, TITLE} from '@consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this._router.events
      .pipe(
        takeUntil(this.destroy$),
        filter(event => event instanceof NavigationEnd),
        map(event => (event as NavigationEnd).url.replace('/', '')))
      .subscribe(path => {
        path === Pages.SignUp || !path
          ? document.title = TITLE
          : document.title = BIRTHDAY_TITLE;
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


}
