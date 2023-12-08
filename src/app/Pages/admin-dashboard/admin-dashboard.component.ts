import { Component } from '@angular/core';
import { Product } from '../../Models/product';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,  RouterOutlet, RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  // products: Product[] = [];
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: 'Bearer ' + localStorage.getItem('token'),
  //   }),
  // };
  // constructor(private http: HttpClient) {
  //   this.http
  //     .get<Product[]>(
  //       'http://localhost:5007/api/Product/GetAllProducts',
  //       this.httpOptions
  //     )
  //     .subscribe((response) => {
  //       this.products = response;
  //       console.log(this.products);
  //     });
  // }
  constructor(private router:Router)
{
}
  logOut()
  {
    this.router.navigateByUrl('login');
  }

}
