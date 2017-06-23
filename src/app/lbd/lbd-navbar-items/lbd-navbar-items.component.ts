import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from '../lbd.module';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'lbd-navbar-items',
  templateUrl: './lbd-navbar-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LbdNavbarItemsComponent {
  @Input()
  navItems: NavItem[];

  @Input()
  navbarClass: string;

  @Input()
  showTitles: boolean;

  constructor(private router: Router, private userService: UserService) { }

logOut() {
    this.userService.purgeAuth();
    this.router.navigateByUrl('/login');
  }

}
