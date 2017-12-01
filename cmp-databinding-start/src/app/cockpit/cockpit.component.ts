import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()
  serverCreated = new EventEmitter<{ type: string, serverName: string, serverContent: string }>();

  @Output()
  bluePrintCreated = new EventEmitter<{ type: string, serverName: string, serverContent: string }>();

  newServerName: string = '';
  newServerContent: string = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      type: 'server',
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.bluePrintCreated.emit({
      type: 'blueprint',
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
