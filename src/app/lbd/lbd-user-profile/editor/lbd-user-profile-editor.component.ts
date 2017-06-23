import {Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Profile } from '../../models';


@Component({
  selector: 'lbd-user-profile-editor',
  templateUrl: './lbd-user-profile-editor.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LbdUserProfileEditorComponent {
  @Input()
  profile: Profile;

  @Input()
  formData: Object;

  constructor() { }
}
