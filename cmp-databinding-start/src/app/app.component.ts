import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: "some server", name: "chandra", content: "some content"}];

 
  onServerAdded(serverData:{serverName:string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluepringData: {serverName:string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluepringData.serverName,
      content: bluepringData.serverContent
    });
  }

  onChangeFirstElementServer(){
    this.serverElements[0].name = "Changed!!!";
  }

  onDeleteFirstElementServer(){
    this.serverElements.splice(0,1);
  }


}
