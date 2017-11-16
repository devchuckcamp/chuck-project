import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

// import { AuthService } from '../service/auth/auth.service';
// import { LoggedIn } from '../../model/loggedin/index';

@Component({
    selector: 'my-work',
    templateUrl: './work.component.html',
    styleUrls:['../app.component.scss']
})
export class WorkComponent implements OnInit {
    model: any = {};
    returnUrl: string;
    loading = false;
    xsDistribution = 100 / 1;
    smDistribution = 100 / 2;
    mdDistribution = 100 / 4.18;
    lgDistribution = 100 / 6;
    works = [
        {
            name:"Rose E-Prescription",
            description:"Appointment ERM",
            url:'https://www.erx.rose-pharmacy.com',
        },
        {
            name:"Ohabart",
            description:"Job Archive",
            url:'http://www.ohabart.com',
        },
        {
            name:"Rose E-Prescription",
            description:"Search Archive",
            url:'https://www.erx.rose-pharmacy.com',
        },
        {
            name:"Ohabart",
            description:"Job Archive",
            url:'http://www.ohabart.com',
        },
        {
            name:"Rose E-Prescription",
            description:"Appointment ERM",
            url:'https://www.erx.rose-pharmacy.com',
        }
    ];

    constructor(
        public router: Router,
        private route: ActivatedRoute,
        ) { }

    ngOnInit() { 
        
    }
}
