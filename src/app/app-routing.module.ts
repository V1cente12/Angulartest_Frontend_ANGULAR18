import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PerfilComponent } from './components/pages/perfil/perfil.component';
import { FormularioComponent } from './components/pages/formulario/formulario.component';
import { ListarComponent } from './components/pages/crud/listar/listar.component';
import { CrearComponent } from './components/pages/crud/crear/crear.component';
import { FormularioReactivoComponent } from './components/pages/crud/formulario-reactivo/formulario-reactivo.component';
import { RxjsEjemploComponent } from './components/pages/rxjs-ejemplo/rxjs-ejemplo.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent, canActivate: [authGuard]},
  {path: 'perfil', component: PerfilComponent, canActivate: [authGuard]},
  {path: 'formulario', component: FormularioComponent},
  {path: 'crud/listar', component: ListarComponent,canActivate: [authGuard]},
  {path: 'crud/crear', component: CrearComponent},
  {path: 'crud/formulario-reactivo', component: FormularioReactivoComponent},
  {path: 'rxjs', component: RxjsEjemploComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
