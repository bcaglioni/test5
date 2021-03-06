import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

/**
 * This service manage the Authentication
 */
@Injectable()
export class AuthenticationService {
    constructor(
        public afAuth: AngularFireAuth,
        private router: Router,
    ) { }

    /**
     * Login function
     */
    login() {
        this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(user => {
            if (user.user)
                this.router.navigate(['/']);
        });
    }

    /**
     * Logout function
     */
    public logout() {
        this.afAuth.auth.signOut();
        this.router.navigate(['/login']);
    }

    /**
     * Get the logged user
     */
    public getUser(): Observable<firebase.User> {
        return this.afAuth.user;
    }

}
