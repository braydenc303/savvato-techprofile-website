import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../_services/user.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _router : Router,
              private _userService: UserService) {

  }

  getUserName() {
    let user = this._userService.getCurrentUser()
    return user && user['name'];
  }

  onShowCareerPathBtnTap($event) {
    this._router.navigate(['/career-goal'])
  }

  onShowSkillsMatrixBtnTap($event) {
    this._router.navigate(['/skills-matrix'])
  }

}
