import { Injectable } from '@angular/core';
import {CommonServiceService} from '../common/common-service.service';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserHis } from '../user-his/userHistiory';
import {User} from './user';

@Injectable()
export class UserDataService extends CommonServiceService{
  private usersUrl: string = 'api/users';
  private userHisUrl: string = this.usersUrl + '/his/';

  constructor(protected _http:Http) {
    super(_http);
  }
  
  getUsers(searchUser:User,pUrl?:string): Observable<User[]> {
    let paramStr: string  = '?user=' + JSON.stringify(searchUser);
    let url : string = this.usersUrl;
    if(pUrl){
      url += pUrl;
    }
    return super.getJson(url+paramStr);
  }

  addUser(addUser:User): Observable<User[]> {
    return super.postJson(this.usersUrl,addUser);
  }

  getUserHis(userNo: number): Observable<UserHis[]> {
    console.log("getUserHis() " + this.userHisUrl + userNo);
    return super.getJson(this.userHisUrl + userNo);
  }

}