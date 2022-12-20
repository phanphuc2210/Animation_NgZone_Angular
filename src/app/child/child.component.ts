import { Component, OnInit , ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() arr: any;
  number = 0;

  constructor(private cf: ChangeDetectorRef){
    // this.cf.detach();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.number = Math.random();
      // this.cf.detectChanges();
    }, 1000);
  }

  public child() {
    console.log('Child');
    return 'Child';
  }
}
