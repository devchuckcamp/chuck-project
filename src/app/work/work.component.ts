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
    constructor(
        public router: Router,
        private route: ActivatedRoute,
        ) { }

    ngOnInit() { 
        
    }
}
