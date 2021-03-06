import { Injectable } from '@angular/core';
// Import the the 'Observable' datatype from rxjs(Reactive Extensions).
import { Observable } from 'rxjs';
// Import the HTTP modules.
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Import the User datatype from the models.
import { User } from '../models/User';

// Since we are sending data to a server, we have to send with
// the HTTP request, the header that contains the content-type.
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // In case the CORS error appears (This line doesn't seem to be needed).
    // 'Access-Control-Allow-Origin': 'http://localhost:3000/api/'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // Get Users. Returns an array of User Observables.
  getUser(id): Observable<User> {
    const url = `api/users/${id}`;
    // Make a get request using the http object that will return an array of 'User' items.
    return this.http.get<User>(url);
  }

  // Get Users. Returns an array of User Observables.
  getUsers(): Observable<User[]> {
    const url = `api/users/all`;
    // Make a get request using the http object that will return an array of 'User' items.
    return this.http.get<User[]>(url);
  }

  // Delete User. Send a put request to the server and update the value.
  // This is not going to stick, since JSONPlaceholder doesn't allow people to edit
  // actual data but it does mimic the response request.
  deleteUser(user: User): Observable<User> {
    // Note that it's '_id' and not 'id' because NodeJS stored IDs in that format.
    const url = `api/users/${user._id}`;

    // A delete request to delete the user from the server.
    return this.http.delete<User>(url, httpOptions);

    // WHEN DELETING A USER DELETE THEIR ORDERS TOO.
  }

  // Add User
  addUser(user: User): Observable<User> {
    const url = `api/users/add`;
    return this.http.post<User>(url, user, httpOptions);
  }

  // Toggle Completed. Put-request that returns an Observable of datatype 'any'. This
  // is because the Observable isn't formated as an exact user since it has the user-id.
  toggleCompleted(user: User): Observable<any> {
    // Specify the ID of the user that is passed in.
    const url = `api/task/${user._id}`;
    // A put request is for when you are UPDATING something on the server.
    return this.http.put(url, user, httpOptions);
  }
}


