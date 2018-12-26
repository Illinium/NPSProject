import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../shared/model/user.model';
import {AuthService} from '../shared/service/auth.service';
import {UsersService} from '../shared/service/user.service';
import {Message} from '../shared/model/message.model';

@Component({
  selector: 'nps-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  message: Message;
  form: FormGroup;

  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.message = new Message('');
    this.form = new FormGroup ({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'checkbox': new FormControl(false, [Validators.required, Validators.requiredTrue])
    });
  }

  private showMessage(message: Message) {
    this.message = message;
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }



  onSubmit() {
    const formData = this.form.value;
    this.userService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (formData.password === user.password) {
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.logIn();
            this.router.navigate(['./admin/price']);
          } else {
            this.showMessage(new Message('Не верный пароль!, попробуйте снова')) ;
          }
        } else {
          this.showMessage(new Message('Не верный имейл'));
        }
      });
  }

}

