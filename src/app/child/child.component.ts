import { Component, OnInit , ChangeDetectionStrategy, ChangeDetectorRef, Input, NgZone } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() arr: any;
  number = 0;

  constructor(private cf: ChangeDetectorRef, private zone: NgZone){
    // this.cf.detach();
  }

  ngOnInit(): void {
    let count = 0;
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        count++;
        console.log('count: ', count);
        console.log('number: ', this.number);
        if(count >= 10) {
          this.zone.run(() => {
            this.number = Math.random();
          });
        } else {
          this.number = Math.random();
        }
        // this.cf.detectChanges();
      }, 1000);
    })
    // setInterval(() => {
    //   this.number = Math.random();
    //   // this.cf.detectChanges();
    // }, 1000);
  }

  public child() {
    console.log('Child');
    return 'Child';
  }
}
