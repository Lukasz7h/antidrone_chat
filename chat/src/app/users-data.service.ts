import { Injectable } from '@angular/core';
import { UserType } from './user-type';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  public usersData: UserType[] = [];

  constructor(){}
}
