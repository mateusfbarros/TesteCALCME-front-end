import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Calcme } from 'src/app/models/calcme';
import { CalcmeService } from 'src/app/services/calcme.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  calcme: Calcme = {
    nome: '',
    email: '',
    telefone: ''
  }

  constructor(private router: Router, private service: CalcmeService) { }

  ngOnInit(): void {
  }

  create(): void {
  
    this.service.create(this.calcme).subscribe((resposta) => {
      this.service.message('Cadastrado realizado! Verifique a integridade dos dados enviados!');
      this.router.navigate(['listAll']);
    }, err => {
      this.service.message('Cadastrado realizado! Verifique a integridade dos dados enviados!');
      this.router.navigate(['listAll']);
    });
  }

  listagem(): void{
    this.router.navigate(['listAll']);
  }

}
