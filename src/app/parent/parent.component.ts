import { Component, OnInit ,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit {
  title = '';
  arr: any[] = [];

  constructor(){}

  ngOnInit(): void {
    // setInterval(() => {
    //   this,this.arr = [Math.random()];
    // }, 1000);
  }

  public parent() {
    // console.log('Parent');
    return 'Parent';
  }
}
