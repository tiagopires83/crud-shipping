import { Component } from '@angular/core';
//import { FuncionarioComponent } from './funcionario/funcionario.component';
  import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Embarque e Desembarque de Funcionários';
  sub_addFuncionario = 'Funcionários';
  sub_manterEmbarque = 'Manter Embarque';
}
