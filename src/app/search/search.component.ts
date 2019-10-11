import { Component, OnInit } from '@angular/core';
import { CallGithubService } from '../call-github.service';
//import { RepoPage } from '../repo/repo.component';
import { NavParams, NavController } from '@ionic/angular';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  constructor(private callGithubService: CallGithubService, public navCtrl: NavController) {}
 
  openReposPage(item) {

    this.navCtrl.navigateForward(['repo',{ item: item}]);	
}  

  ngOnInit() {}

}
