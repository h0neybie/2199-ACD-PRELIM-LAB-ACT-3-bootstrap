import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  firstname: string = 'Hello!';
  lastname: string = 'I am Abby';
  email: string = 'dizonabbycruz@gmail.com';
  phone: string = '09669407251';
  position: string = 'Welcome to my Personal Blog.';
  description: string = "It contains a  compilation of my current favourites! I hope you enjoy exploring as much as I did while making it ˚ʚ♡ɞ˚ ";}

