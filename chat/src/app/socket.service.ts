import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/webSocket';
import { UserType, user } from './user-type';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private readonly secret_key = "cz9Dsdsiyas986adsfOHzz4dzzAPOwdMQNzzzmlocbcv869fiasTYdawn648489z49S8DadwajuhkjlA5S3A4adefdsaUfaa5AF654dasSA64a56fs46a5f46adfs657dfs897dsfd89ds9d87sa3dAFw4a2dascxzASFzzASFaaO76G96fafa98sad";
  public readonly socketSubject: WebSocketSubject<UserType> = webSocket("ws://localhost:3000/?key="+this.secret_key);

  public chatUsers: {[key: string]: user} = {};
  static classInstance: ThisType<SocketService>;

  constructor()
  {
    if(SocketService.classInstance instanceof SocketService) return SocketService.classInstance;

    SocketService.classInstance = this;
    return this;
  }

  protected sendMessage(data: UserType)
  {
    this.socketSubject.next(data)
  }
  
}
