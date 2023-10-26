import { Injectable } from '@angular/core';
import { SocketService } from '../socket.service';

import { object, z } from 'zod';
import { skip, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatViewService {

  constructor(private socket: SocketService){

    const zObj = {
      id: z.string().length(18),
      message: z.string().array()
    };

    const properType = object(zObj)

    socket
    .socketSubject
    .pipe(
      tap((data) => {
        console.log(data)
        if( !properType.parse(data) || data) skip(1);
      })
    )
    .subscribe((data) => {
      console.log(data)
    })
  }
}
