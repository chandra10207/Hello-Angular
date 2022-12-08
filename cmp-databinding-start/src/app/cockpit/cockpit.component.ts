import { Component, OnInit,EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('sCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bCreated') bluepringCreated = new EventEmitter<{serverName:string, serverContent:string}>();

  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(serverName:HTMLInputElement) {
    console.log(serverName);
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: serverName.value,
      serverContent: this.newServerContent
    });

    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(serverNameInput:HTMLInputElement) {

    this.bluepringCreated.emit({
      // serverName: this.newServerName,
      serverName: serverNameInput.value,
      serverContent: this.newServerContent
    });
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

}
