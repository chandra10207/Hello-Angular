import { Component } from "@angular/core";

// Decorator
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number =  10 +  Math.random();
    serverStatus: string = "Offline";

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;

    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}

