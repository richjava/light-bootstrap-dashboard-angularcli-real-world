import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarTitleService } from '../lbd/services/navbar-title.service';
import { User, Profile } from '../lbd/models';
import { UserService } from '../lbd/services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  animations: [
    trigger('carduserprofile', [
      state('*', style({
        '-ms-transform': 'translate3D(0px, 0px, 0px)',
        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
        '-moz-transform': 'translate3D(0px, 0px, 0px)',
        '-o-transform': 'translate3D(0px, 0px, 0px)',
        transform: 'translate3D(0px, 0px, 0px)',
        opacity: 1
      })),
      transition('void => *', [
        style({
          opacity: 0,
          '-ms-transform': 'translate3D(0px, 150px, 0px)',
          '-webkit-transform': 'translate3D(0px, 150px, 0px)',
          '-moz-transform': 'translate3D(0px, 150px, 0px)',
          '-o-transform': 'translate3D(0px, 150px, 0px)',
          transform: 'translate3D(0px, 150px, 0px)',
        }),
        animate('0.3s 0s ease-out'),
      ])
    ]),
    trigger('cardprofile', [
      state('*', style({
        '-ms-transform': 'translate3D(0px, 0px, 0px)',
        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
        '-moz-transform': 'translate3D(0px, 0px, 0px)',
        '-o-transform': 'translate3D(0px, 0px, 0px)',
        transform: 'translate3D(0px, 0px, 0px)',
        opacity: 1
      })),
      transition('void => *', [
        style({
          opacity: 0,
          '-ms-transform': 'translate3D(0px, 150px, 0px)',
          '-webkit-transform': 'translate3D(0px, 150px, 0px)',
          '-moz-transform': 'translate3D(0px, 150px, 0px)',
          '-o-transform': 'translate3D(0px, 150px, 0px)',
          transform: 'translate3D(0px, 150px, 0px)',
        }),
        animate('0.3s 0.25s ease-out')
      ])
    ])
  ]
})
export class UserComponent implements OnInit {
  public formData: any;
  public userAbout: string;
  profile: Profile;
  currentUser: User;
  isUser: boolean;

  constructor(
    private navbarTitleService: NavbarTitleService,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  public ngOnInit() {
    this.navbarTitleService.updateTitle('User Profile');

    this.userAbout = '"Lamborghini Mercy <br>Your chick she so thirsty <br>I\'m in that two seat Lambo"';

    this.formData = {
      username: 'michael23',
      email: '',
      firstName: 'Mike',
      lastName: 'Andrew',
      address: 'Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09',
      city: 'Mike',
      country: 'Andrew',
      postCode: null,
      aboutMe: 'Lamborghini Mercy, Your chick she so thirsty, I\'m in that two seat Lambo.'
    };
    
    this.route.data.subscribe(
      (data: { profile: Profile }) => {
        this.profile = data.profile;
        // Load the current user's data.
        this.userService.currentUser.subscribe(
          (userData: User) => {
            this.currentUser = userData;
            this.isUser = (this.currentUser.username === this.profile.username);
          }
        );
      });
  }

  public onSubmit() {
    console.log('Submitting values', this.formData);
  }
}
