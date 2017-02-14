import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//transforma minha classe em um módulo do angular
@NgModule({
    imports: [ BrowserModule ], //como minha app vai rodar no navegador importo o modulo de browser
    declarations: [ AppComponent ], //oq esse meu modulo declarations
    bootstrap: [ AppComponent ] //com qual component quero quer inicie minha aplicacao

})

class AppModule {}