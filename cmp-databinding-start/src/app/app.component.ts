import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  serverElements = [
    {
      type: 'server',
      name: 'Server 1',
      content: 'This is Server 1'
    },
    {
      type: 'server',
      name: 'Server 2',
      content: 'This is Server 2'
    }
  ];

  newServerName = '';
  newServerContent = '';

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBluePrintCreated(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

}
