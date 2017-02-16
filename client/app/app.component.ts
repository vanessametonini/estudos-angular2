//importa um decorator que transforma a classe num component
import { Component } from '@angular/core';
import { Http } from '@angular/http';

//nessa anotação eu configuro meu component
@Component({
    moduleId: module.id,
    selector: 'app', //maneira como vou acessar meu component nas views (nome do component na view)
    templateUrl: './app.component.html' //url do template do meu component
})

export class AppComponent {

    constructor(http: Http){

    }
}