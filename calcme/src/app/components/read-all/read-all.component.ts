import { Component, OnInit } from '@angular/core';
import { Calcme } from 'src/app/models/calcme';
import { Router } from '@angular/router';
import { CalcmeService } from 'src/app/services/calcme.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  list: Calcme[] = [];

  constructor(private service: CalcmeService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
    })
  }
  cadastrar(): void{
    this.router.navigate(['']);
  }
}
