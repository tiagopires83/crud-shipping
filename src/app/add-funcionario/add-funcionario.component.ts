import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-add-funcionario',
  templateUrl: './add-funcionario.component.html',
  styleUrls: ['./add-funcionario.component.css']
})
export class AddFuncionarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private funcionarioService:FuncionarioService) { }

  addForm : FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group(
      {
        id : [], 
        nome : ['',Validators.required],
        funcao : ['', Validators.required],
        empresa : ['', Validators.required]
      }
    );

  }

  onSubmit(){
    
    this.funcionarioService.addFuncionario(this.addForm.value);
    this.router.navigate(['addFuncionario']);
    
  }

}
