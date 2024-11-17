import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env';

declare var google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  private router = inject(Router)

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: environment.clientID,
      callback: (res: any) => this.handleLogin(res)
    })

    google.accounts.id.renderButton(document.getElementById("google-btn"), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 300
    })
  }

  private decodeToken(token: any) {
    try {
      const payload = token.split('.')[1];
      const decoded = atob(payload);
      return JSON.parse(decoded);
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  }

  handleLogin(res: any) {
    console.log(res)
    const payload = this.decodeToken(res.credential)
    sessionStorage.setItem("user", JSON.stringify(payload))
    this.router.navigate(['/browse'])
  }
}
