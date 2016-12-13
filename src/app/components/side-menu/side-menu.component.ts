import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass']
})
export class SideMenuComponent {
  @Output() linkClick = new EventEmitter();

  constructor() { }

  onLinkClick($e) {
    this.linkClick.emit($e)
  }
}
