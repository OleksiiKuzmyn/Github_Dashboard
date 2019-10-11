import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallGithubService {
  userName: string='';
  avatarUrl:any;
  name:any;
  response: any;
  repos: any;
  loading:boolean = true;
  constructor(private http: HttpClient) {}


  search(){
    
      this.http.get('https://api.github.com/users/'+ this.userName).subscribe((response)=>{
        this.response = response;
        this.avatarUrl = this.response.avatar_url;
        this.name = this.response.name;
        this.getRepos(this.response.repos_url);
        this.loading = false;
        
      })
    }

    getRepos(reposUrl){
      this.http.get(reposUrl).subscribe((repos)=>{
        this.repos = repos;
      })

    }

    onCancel(){
      this.userName='';
      this.avatarUrl='';
      this.name='';
      this.response='';
      this.repos='';

    }

  
}
