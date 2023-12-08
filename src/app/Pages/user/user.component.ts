import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // 
  user: User;
  username: string = '';
  email: string = '';
  password: string = '';
  errMsg: string = '';
  httpResponse: any;
  selectedRole: number =0;

  // Mapping of role names to their respective values
  roleMap: { key: string, value: number }[] = [
    { key: 'User', value: 1 },
    { key: 'Admin', value: 4 },
    {key: 'Supplier',value: 10},
  ];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    }),
  };

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User();
  }

  onSubmit(): void {
      const newUser = {
        userID: Math.floor(Math.random() * 100),
        username: this.username,
        email: this.email,
        password: this.password,
        roleID: Number(this.selectedRole)
      };
      console.log(newUser);
      this.http
        .post('http://localhost:5007/api/User/AddNewUser', newUser,this.httpOptions)
        .subscribe((response) => {
          this.httpResponse = response;
          console.log(this.httpResponse);
          this.router.navigateByUrl('login');
        });
    
  }
  

  onReset(form: NgForm): void {
    form.reset();
  }
}
