import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template:
  // `asdvavaev
  // qwevewv
  // wevewq
  // vwev
  // WebGLVertexArrayObject
  // <h2>dsvewvewvewv</h2>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server created";
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2',];

  constructor() {

    setTimeout(() => {
      console.log("aefaef");
      this.allowNewServer = true;
  
    }, 2000);

   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server created!! and Server name is: " + this.serverName;

  }

  onServerUpdate(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement> event.target).value;
  }

}
