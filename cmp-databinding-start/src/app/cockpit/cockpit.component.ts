import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output('sCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bCreated') bluepringCreated = new EventEmitter<{serverName:string, serverContent:string}>();


  @ViewChild('serverContentInput') serverContentInput:ElementRef // ng > 8

  // newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(serverName:HTMLInputElement) {
    console.log("hello");
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: serverName.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
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
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

}
