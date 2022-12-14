import { 
  Component, 
  Input, 
  OnChanges, 
  OnInit, 
  SimpleChanges, 
  ViewEncapsulation, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //Default Emulated,  None, Naitive
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy

{

  @Input('srvElement') element: {type:string, name:string, content:string}
  @Input() name:string;


  constructor() { 
    console.log("constructor called");
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges called");
    console.log(changes)
  }

  ngOnInit(): void {
    console.log("ngOnInit called.");
  }


  ngDoCheck(){
    console.log("ngDoCheck called.");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called.")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called.")
  }

  ngAfterViewInit(){
    console.log("AfterViewInit called.")
  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked called.")
  }

  ngOnDestroy(){
    console.log("OnDestroy called.")
  }




}
