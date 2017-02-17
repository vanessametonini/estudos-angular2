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

    fotos: Object[] = [];

    constructor(http: Http){

        //v4
        http.get('v1/fotos')
            .map(res => res.json())
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );

        //v1
        // let stream = http.get('v1/fotos');
        // stream.subscribe(res => {
        //     this.fotos = res.json();
        //     console.log(this.fotos);
        // });

        //v2
        // http.get('v1/fotos')
        //     .map(res => res.json())
        //     .subscribe(fotos => {
        //         this.fotos = fotos
        //     });

        //v3
        //  http.get('v1/fotos')
        //     .map(res => res.json())
        //     .subscribe(fotos => this.fotos = fotos);
    }
}