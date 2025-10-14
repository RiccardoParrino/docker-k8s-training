import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Welcome } from './welcome';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('frontend');

  public msg : string = "";

  constructor (private http:HttpClient, private welcomeService:Welcome) {}
  
  ngOnInit(): void {
    this.welcomeService.welcome().subscribe ( data => {
      this.msg = data.msg;
    } )
  }


}
