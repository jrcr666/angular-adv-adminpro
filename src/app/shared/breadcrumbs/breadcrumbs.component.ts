import { ActivationEnd, Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: ``,
})
export class BreadcrumbsComponent implements OnDestroy {
  public title: string = '';
  public $title: Subscription;

  constructor(private router: Router) {
    this.$title = this.getRouteArguments().subscribe(({ title }) => {
      this.title = title;
      document.title = `AdminPro - ${title}`;
    });
  }

  getRouteArguments() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event) => event.snapshot.firstChild === null),
      map((event) => event.snapshot.data),
    );
  }

  ngOnDestroy(): void {
    this.$title.unsubscribe();
  }
}
