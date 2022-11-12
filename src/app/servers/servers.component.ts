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

  

  constructor() {

    setTimeout(() => {
      console.log("aefaef");
      this.allowNewServer = true;
  
    }, 2000);

   }

  ngOnInit(): void {
  }

}
