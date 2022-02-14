import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-gallery-div',
  templateUrl: './gallery-div.component.html',
  styleUrls: ['./gallery-div.component.css']
})
export class GalleryDivComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;


constructor(
  private authService: AuthService){}

  isShown: boolean = false ; 


  toggleShow() {
  
  this.isShown = ! this.isShown;
  
  }
  
  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
    this.isAuthenticated = !!user;
    console.log(!user);
    console.log(!!user);
    });
    }

    onLogout() {
      this.authService.logout();
    }

    ngOnDestroy(){
      this.userSub.unsubscribe();

    }


}