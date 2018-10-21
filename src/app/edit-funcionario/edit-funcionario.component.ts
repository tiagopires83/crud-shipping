import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { FuncionarioService } from '../funcionario.service';
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-funcionario',
  templateUrl: './edit-funcionario.component.html',
  styleUrls: ['./edit-funcionario.component.css']
})
export class EditFuncionarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private funcionarioService:FuncionarioService) { }

  edtForm : FormGroup;

  ngOnInit() {
    this.edtForm = this.formBuilder.group(
      {
        id : [], 
        nome : ['',Validators.required],
        funcao : ['', Validators.required],
        empresa : ['', Validators.required]
      }
    );

  }

  onSubmit(){
    
    this.funcionarioService.addFuncionario(this.edtForm.value);
    this.router.navigate(['addFuncionario']);
    
  }

}
