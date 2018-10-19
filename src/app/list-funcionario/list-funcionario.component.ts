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
  }

  deleteFuncionario(funcionario: Funcionario): void {
    this.funcionarioService.deleteFuncionario(funcionario);
  };

  editFuncionario(funcionario: Funcionario): void {
    localStorage.removeItem("editFuncionarioId");
    localStorage.setItem("editFuncionarioId", funcionario.id.toString());
    this.router.navigate(['editFuncionario']);
  };

  addFuncionario(): void {
    this.router.navigate(['addFuncionario']);
  };

}
