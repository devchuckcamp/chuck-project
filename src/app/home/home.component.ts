import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import {ToasterModule, ToasterContainerComponent, ToasterService, ToasterConfig} from 'angular2-toaster';
import { CarouselModule,CarouselComponent,SlideComponent } from 'angular-bootstrap-md/carousel';


// import { AuthService } from '../service/auth/auth.service';
// import { LoggedIn } from '../../model/loggedin/index';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls:['../app.component.scss']
})
export class HomeComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    loading = false;

    // Image Carousel
    public imageSources: string[] = [
        '../assets/img/me_cartoon3.jpg',
        '../assets/img/me_cartoon3.jpg',
        '../assets/img/me_cartoon3.jpg',
     ];

    constructor(
        public router: Router,
        private route: ActivatedRoute,
        ) { }

    ngOnInit() { 
        
    }
}
