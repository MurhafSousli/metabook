import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-component-viewer',
  templateUrl: './component-viewer.component.html',
  styleUrls: ['./component-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentViewerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
