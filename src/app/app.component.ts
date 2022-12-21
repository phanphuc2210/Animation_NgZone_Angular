import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations'

// ========= Cách 1
// const enterTransition = transition(':enter', [
//   style({
//     opacity: 0,
//   }),
//   animate('1s ease-in', style({opacity: 1})),
// ]);
// const exitTransition = transition(':leave', [
//   style({
//     opacity: 1,
//   }),
//   animate('1s ease-out', style({opacity: 0})),
// ])

// const fadeIn = trigger('fadeIn', [enterTransition]);
// const fadeOut = trigger('fadeOut', [exitTransition]);

// ================== Cách 2
// const fadeInOut = trigger('fadeInOut', [
//   state(
//     'open',
//     style({
//       opacity: 1
//     })
//   ),
//   state(
//     'close',
//     style({
//       opacity: 0
//     })
//   ),
//   transition('open => *', [animate('1s ease-out')]),
//   transition('* => open', [animate('1s ease-in')]),
// ])

// =================== Cách 3
const fadeInOut = trigger('fadeInOut', [
  state(
    'in',
    style({
      opacity: 1
    })
  ),
  transition('void => *', [style({opacity: 0}), animate('1s ease-out')]),
  transition('* => void', [animate('1s ease-out'), style({opacity: 0})]),
])

const flyInOut = trigger('flyInOut', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    style({ transform: 'translateX(-120%)' }),
    animate(100)
  ]),
  transition('* => void', [
    animate(100, style({ transform: 'translateX(-120%)' }))
  ])
])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [fadeIn, fadeOut],
  animations: [fadeInOut, flyInOut]
})
export class AppComponent {
  title = 'Animation_NgZone_Angular';

  isShow = false;
  isShowSlide = false;

  public fadeInOut():void {
    this.isShow = !this.isShow;
  }

  public slideShowHide():void {
    this.isShowSlide = !this.isShowSlide;
  }

  public onAnimationStart(event:any) {
    console.log('onAnimationStart', event);
  }

  public onAnimationDone(event:any) {
    console.log('onAnimationDone', event);
  }
}
