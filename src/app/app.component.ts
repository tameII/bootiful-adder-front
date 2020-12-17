import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bootiful-adder-front';
  number = '50';
  result = '0';

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/adder/current', {responseType: 'text'}).subscribe(data => {
      this.result = data;
      console.log(this.result);
    });
  }

  constructor(private httpClient: HttpClient) {
  }

  onAdd(): void {
    let url = 'http://localhost:8080/adder/accumulate?num=' + this.number;
    this.httpClient.get(url, {responseType: 'text'}).subscribe(data => {
      this.result = data;
      console.log(this.result);
    });
  }


}
