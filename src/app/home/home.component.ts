import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  work = 'hello home!';
  // tslint:disable-next-line:member-ordering
  allGirls: Observable<any>;
  // tslint:disable-next-line:prefer-const
  headers: Headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });

  constructor(private http: Http) { }

  ngOnInit() {
    this.getAllGirls();
  }
  // 请求所有的妹纸！
  // (两种写法：第一是用subscribe订阅http.get产生的流，第二是用异步管道 async 如下)
  getAllGirls() {
    /*
      this.http.get('/girls/queryAllGirls')
          .map(res => res.json())
          .subscribe(
            data => this.allGirls = data, // 此处的 allGirls 是 allGirls: Array<any>;
            err => console.log(err),
            () => console.log('Authentication Complete')
          );
    */
    this.allGirls = this.http.get('/girls/queryAllGirls')
        .map(res => res.json());
  }
  // 名叫 vol 的妹纸！
  getGirlsByName() {
    this.allGirls = this.http.post('/girls/queryGirlsByName', JSON.stringify({name: 'vol'}), {headers: this.headers})
        .map(res => res.json());
  }
}


