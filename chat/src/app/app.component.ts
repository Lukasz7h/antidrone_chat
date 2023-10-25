import { Component, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chat';
  private socketSubject;

  constructor(){
    const secret_key = "cz9Dsdsiyas986adsfOHzz4dzzAPOwdMQNzzzmlocbcv869fiasTYdawn648489z49S8DadwajuhkjlA5S3A4adefdsaUfaa5AF654dasSA64a56fs46a5f46adfs657dfs897dsfd89ds9d87sa3dAFw4a2dascxzASFzzASFaaO76G96fafa98sad";
    this.socketSubject = webSocket("ws://localhost:3000/?key="+secret_key);
  }
   
  ngOnInit(): void {

    this.socketSubject.subscribe((data) => {
      console.log(data);
    });

    setTimeout(() => {
      this.socketSubject.next({message: {data: "know"}})
    }, 500);
    
  }
}
