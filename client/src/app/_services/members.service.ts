import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Member } from '../models/member';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [];
  constructor(private http: HttpClient) { }


  getMembers(){
    if(this.members.length > 0) return of(this.members);
    return this.http.get<Member[]>(this.baseUrl + 'users').pipe(
      map(members => {
        this.members = members;
        return members;
      } )
    )
  }

  getMember(username: string){
    const member = this.members.find(member => member.userName === username);
    if(member) return of(member);

    return this.http.get<Member>(this.baseUrl + 'users/' + username)
    // return this.http.get<Member>(this.baseUrl + 'users/' + username, this.getHttpOptions())
  }

  updateMember(member: Member){
    return this.http.put(this.baseUrl+ 'users/', member).pipe(
      map(() =>{
        const index = this.members.indexOf(member);
        this.members[index] = {...this.members[index], ...member}
      })
    )
  }


  setMainPhoto(photoId: number){
    return this.http.put(this.baseUrl + 'users/set-main-photo/' + photoId, { });
  }


  deletePhoto(photoId: number){
    return this.http.delete(this.baseUrl + 'users/delete-photo/' + photoId);
  }










 // this commented as it genralized in the JWT interceptor

  // getHttpOptions(){ // to pass authentication token inside the http header
  //   const userString = localStorage.getItem('user');
  //   if(!userString) return;
  //   const user = JSON.parse(userString);
  //   return{
  //     headers: new HttpHeaders({
  //       Authorization: 'Bearer '  + user.token /*MUST type a space after Bearer */
  //     })
  //   }
  // }
}
