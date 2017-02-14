//importa um decorator que transforma a classe num component
import { Component } from '@angular/core';

//nessa anotação eu configuro meu component
@Component({
    selector: 'app', //maneira como vou acessar meu component nas views (nome do component na view)
    templateUrl: './app/app.component.html' //url do template do meu component
})

class AppComponent {}