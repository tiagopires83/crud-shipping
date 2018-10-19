import { Injectable } from '@angular/core';
import { Funcionario } from './model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private mockFuncs: Funcionario[]; 
  private funcionario:Funcionario = new Funcionario(); 

  constructor() { }

  getFuncionarios(){

    //this.funcionario = new Funcionario();
    //this.funcionario.id = 1;
    //this.funcionario.nome = 'blaaa';
    //this.funcionario.funcao = 'sdfhsf';
    //this.funcionario.empresa = 'sdfasf';

    //this.mockFuncs.push(this.funcionario)

    this.mockFuncs = [
      {id: 1, nome: 'João da Silva', funcao: 'Engenheiro', empresa : 'TKS Engenharia' },
      {id: 2, nome: 'Joana Santos', funcao: 'Analista', empresa : 'Albatroz Engenharia' },
      {id: 3, nome: 'Lédio Brito', funcao: 'Diretor Geral', empresa : 'ABC Engenharia' },
      {id: 4, nome: 'Oswaldo Soares', funcao: 'Químico', empresa : 'CCIP Engenharia' },
      {id: 5, nome: 'Marina Albuquerque', funcao: 'Geologista', empresa : 'Jhon Engenharia' },
      {id: 6, nome: 'Jair Messias', funcao: 'Presidente', empresa : 'JMB Engenharia' }
    ];

    return this.mockFuncs;
  }

  addFuncionario(funcionario: Funcionario){
    this.mockFuncs.push(funcionario);
  }

  deleteFuncionario(funcionario: Funcionario){
    this.mockFuncs.splice(this.mockFuncs.indexOf(funcionario), 1);
  }


}
