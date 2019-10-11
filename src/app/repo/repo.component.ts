import { Component, OnInit } from '@angular/core';
import { CallGithubService } from '../call-github.service';
import { ActivatedRoute } from '@angular/router';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss'],
})
export class RepoComponent implements OnInit {
  selectedItem: any;

  name: any;
  language: any;
  description: any;
  created_at: any;
  updated_at: any;
  html_url: any;

  constructor(private actRoute: ActivatedRoute, private callGithubService: CallGithubService 
     ) {
     this.selectedItem = this.actRoute.snapshot.params['item'];
     this.name = callGithubService.repos[this.selectedItem].name;
     this.language = callGithubService.repos[this.selectedItem].language;
     this.description = callGithubService.repos[this.selectedItem].description;
     this.created_at = callGithubService.repos[this.selectedItem].created_at;
     this.updated_at = callGithubService.repos[this.selectedItem].updated_at;
     this.html_url = callGithubService.repos[this.selectedItem].html_url;

    }

    openWindow(url){
      window.open(url, '_system');
    }

  ngOnInit() {}

}
