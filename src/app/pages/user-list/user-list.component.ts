import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { UserService } from '../../services/user.service';
// Import Models
import { User } from '../../domain/test5_db/user';

// START - USED SERVICES
/**
* UserService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* UserService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of User
 * @class UserListComponent
 */
@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private userService: UserService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.userService.list();
    }

    /**
     * Select User to remove
     *
     * @param {string} id Id of the User to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected User
     */
    deleteItem() {
        this.userService.remove(this.idSelected);
    }

}
