import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chat';

  constructor(private socket: Socket){}

  ngOnInit(): void {
    this.socket.connect();

    this.socket.on("message", (data: any) => {
      console.log(data);
    });

    this.socket.emit("message", {data: true})
  }
}
