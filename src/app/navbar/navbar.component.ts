import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/navbar/menu-item';
import { NgZone } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItems: MenuItem[] = [
    {
      label: 'Galleria',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Tarjoukset',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    
    {
      label: 'Yhteistiedot',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Yhteydenotto',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true
    },
    {
      label: 'Palvelut',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
    {
      label: 'Verkkokauppa',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
  ];

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
  }

  scroll = (): void => {

   let scrollHeigth;

   if(window.innerWidth < 150){
    scrollHeigth = 10;
   }else if(window.innerWidth < 300 && window.innerWidth > 150){
    scrollHeigth = 110;
   }else if(window.innerWidth < 400 && window.innerWidth > 300){
    scrollHeigth = 210;
   }else if(window.innerWidth < 700 && window.innerWidth > 400){
    scrollHeigth = 310;
   }else{
     scrollHeigth = 410;
   }

    if(window.scrollY >= scrollHeigth){
      document.body.style.setProperty('--navbar-scroll', "rgb(243,127,41,255)");
      document.body.style.setProperty('--navbar-scroll-text', " color: rgb(85, 45, 13)");
      document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
    
    }else if(window.scrollY < scrollHeigth){
      document.body.style.setProperty('--navbar-scroll', "transparent");
      document.body.style.setProperty('--navbar-scroll-text', "white");
      document.body.style.setProperty('--navbar-scroll-shadow', "none");
 

    }
  }

}