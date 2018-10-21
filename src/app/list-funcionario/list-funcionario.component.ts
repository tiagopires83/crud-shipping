import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from '../model/funcionario';

@Component({
  selector: 'app-list-funcionario',
  templateUrl: './list-funcionario.component.html',
  styleUrls: ['./list-funcionario.component.css']
})
export class ListFuncionarioComponent implements OnInit {

  //private funcionarioEdit:Funcionario = new Funcionario(); 

  private funcionarios: Funcionario[];

  constructor(private router: Router, private funcionarioService: FuncionarioService) { }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.getFuncionarios();
    console.log(this.funcionarios);
  }

  deleteFuncionario(funcionario: Funcionario): void {
    this.funcionarioService.deleteFuncionario(funcionario);
  };

  editFuncionario(funcionario: Funcionario): void {
    
    
    //this.router.navigate(['editFuncionario']);
  };

  novoFuncionario(): void {
    this.router.navigate(['addFuncionario']);
  };

}
