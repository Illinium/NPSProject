import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {User} from '../model/user.model';
import {map} from 'rxjs/operators';
import {BaseApi} from '../../../../shared/core/base-api';


@Injectable()
export class UsersService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.get(`users?email=${email}`)
      .pipe(map((users: User[]) => users[0] ? users[0] : undefined));
  }

  createNewUser(user: User): Observable<User> {
    return this.post('users', user);
  }
}
