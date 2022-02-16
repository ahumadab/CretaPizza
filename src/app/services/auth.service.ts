import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { IUser } from '../entities/User/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
  public userConnected$ = new BehaviorSubject<boolean>(false)
  constructor() { }

  connectUser(user: IUser): void
  {
    delete user.password;
    user.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ";
    localStorage.setItem("user", JSON.stringify(user));
    this.userConnected$.next(true);
  }

  disconnectUser(): void
  {
    localStorage.removeItem("user");
    this.userConnected$.next(false);
  }

  userIsConnected(): boolean
  {
    return this.userConnected$.value;
  }
}
