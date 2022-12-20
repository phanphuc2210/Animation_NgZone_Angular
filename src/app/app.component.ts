import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations'

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('1s ease-in', style({opacity: 1})),
]);
const exitTransition = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate('1s ease-out', style({opacity: 0})),
])

const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [exitTransition]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn, fadeOut]
})
export class AppComponent {
  title = 'Animation_NgZone_Angular';

  isShow = false;

  public fadeInOut():void {
    this.isShow = !this.isShow;
  }
}
