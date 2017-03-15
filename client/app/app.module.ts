import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { botaoModule } from './botao/botao.module';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing } from './app.routes';


//transforma minha classe em um módulo do angular
@NgModule({
    imports: [
        BrowserModule,
        FotoModule,
        HttpModule,
        PainelModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        botaoModule ], //como minha app vai rodar no navegador importo o modulo de browser
    declarations: [ AppComponent, ListagemComponent, CadastroComponent ],
    bootstrap: [ AppComponent ] //com qual component quero quer inicie minha aplicacao
})

export class AppModule {}