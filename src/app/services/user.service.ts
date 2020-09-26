import { Subject } from 'rxjs/Subject';
import { User } from "../models/User.model";

export class UserService{
    private users: User[] = [
        {
            firstName: 'Seb',
            lastName:'Smith',
            email:'seb@smith.com',
            drinkPreference:'Coca',
            hobbies: [
                'La programation',
                'la photographie'
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers(){
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User){
        this.users.push(user);
        this.emitUsers;
    }
}