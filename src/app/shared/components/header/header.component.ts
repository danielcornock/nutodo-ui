import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private readonly _stateService: StateService) {}

  ngOnInit(): void {}

  public createNewTodo(): void {
    this._stateService.go('todoCreate');
  }
}
