import { Component } from '@angular/core';
import { SocketService } from '../socket.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-guests-list',
  templateUrl: './guests-list.component.html',
  styleUrls: ['./guests-list.component.scss']
})
export class GuestsListComponent {
  constructor(private socketService: SocketService){
    socketService
    .socketSubject
    .pipe(
      tap((data) => {
        console.log(data)
      })
    )
  }
}
