import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { any } from 'joi';
import { DataService } from '../data.service';



interface Data {
  title: string
  body: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService, private http: HttpClient) { }

  boxes: any = [];

  ngOnInit(): void {

    this.dataService.getData().subscribe((res) => {
      this.boxes = res;

    })

  }


  removeBoxes(i: any, box: any) {

    let title = box;

    this.boxes.splice(i, 1);

    this.dataService.deleteData(box);

  }

  addNote(newTitle: string, note: string): void {

    let i = 0;

    while (i < this.boxes.length) i++;

    i += 1;

    if(newTitle == "") newTitle = "Note " + i;

  

    const data: Data = {

      title: newTitle,
      body: note


    }

    this.boxes.push(data);

    this.dataService.sendData(data);

    console.log("inserted");





    (<HTMLInputElement>document.getElementById('inputBar')).value = "";
    (<HTMLInputElement>document.getElementById('textBar')).value = "";





  }



}

