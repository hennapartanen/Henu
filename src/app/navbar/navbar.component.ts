
import { Component, OnInit } from '@angular/core';


import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);

  }

  goDown1() {
    this.scroller.scrollToAnchor("targetGalleria");
  }

  goDown2() {

    document.getElementById("targetPalvelut").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  goDown3() {
  
    document.getElementById("targetYhteistiedot").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
  goDown4() {
  
    document.getElementById("targetVerkkokauppa").scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
 
  

  scroll = (): void => {

    let scrollHeigth;

    if (window.innerWidth < 150) {
      scrollHeigth = 10;
    } else if (window.innerWidth < 300 && window.innerWidth > 150) {
      scrollHeigth = 110;
    } else if (window.innerWidth < 400 && window.innerWidth > 300) {
      scrollHeigth = 210;
    } else if (window.innerWidth < 700 && window.innerWidth > 400) {
      scrollHeigth = 310;
    } else {
      scrollHeigth = 2;
    }

    if (window.scrollY >= scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', "#FC842B");

      document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");

    } else if (window.scrollY <= scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', "transparent");
      document.body.style.setProperty('--navbar-scroll-text', "white");
      document.body.style.setProperty('--navbar-scroll-shadow', "none");

    }
    
  }
  
}