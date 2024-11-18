import { Component, inject, Input, input } from '@angular/core';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  auth = inject(AuthService);

  profileImg:any = input<String>();
  name:any = input<String>();

  navList = [
    'Home',
    'TV Shows',
    'News & Popular',
    'My List',
    'Browse By Language',
  ];

  async signOut() {
    this.auth.signOut()
  }

}
