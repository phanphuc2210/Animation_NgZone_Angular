import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.scss']
})
export class GrandparentComponent implements OnInit {
  title = 'some';

  constructor(){}

  ngOnInit(): void {}

}
