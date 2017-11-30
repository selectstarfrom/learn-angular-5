import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css'],
    styles: [`
        .online{
            color: white;
            background-color: green;
        }
        .offline{
            color: white;
            background-color: red;
        }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'Offline';

    getServerStatus() {
        return this.serverStatus;
    }

    constructor() {
        this.serverStatusSwitch();
    }

    private serverStatusSwitch() {
        setTimeout(() => {
            this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
        }, 1000);
    }

    getColor() {
        return this.getServerStatus() === "offline" ? "green" : "red";
    }
}