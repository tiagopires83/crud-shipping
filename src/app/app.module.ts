import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListFuncionarioComponent } from './list-funcionario/list-funcionario.component';
import { AddFuncionarioComponent } from './add-funcionario/add-funcionario.component';
import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {path: 'addFuncionario', component: AddFuncionarioComponent},
  {path: 'listFuncionario', component: ListFuncionarioComponent},
  {path: 'editFuncionario', component: EditFuncionarioComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    ListFuncionarioComponent,
    AddFuncionarioComponent,
    EditFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
