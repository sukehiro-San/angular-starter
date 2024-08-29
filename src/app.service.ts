import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AppService {
  loggedIn: boolean = false;
  constructor(private router: Router, private http:HttpClient) {}
  login(username: string, password: string) {
    console.log(username, password);
    if (username === "sunny" && password === "sunny") {
      console.log("loggenin");
      this.loggedIn = true;
      this.router.navigate(["/home"]);
    }
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(["/test"]);
  }

  getUserData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users',{
      observe:"body"
    });
  }
}
