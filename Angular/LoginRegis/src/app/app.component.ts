import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  // moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = "Welcome";
  user = new UserComponent();
  users = [];
  submitted;
  // submitted = false;

  onSubmit(model: UserComponent, isValid: boolean) {
    console.log(this.user, isValid);
    this.users.push(this.user);
    this.submitted = this.user;
    this.user = new UserComponent();
    // this.submitted = true;
    
  }
}
