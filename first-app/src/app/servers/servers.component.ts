import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreateStatus: string = 'Click \'Add Server\' to add more servers';
  serverName: string = 'Server 0';
  servers = ['Server 1', 'Servre 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreateStatus = 'Server has been created';
  }

  onServerNameInput(pEvent: Event) {
    this.serverName = (<HTMLInputElement>pEvent.target).value;
  }

}
