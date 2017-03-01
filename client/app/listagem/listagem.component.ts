//importa um decorator que transforma a classe num component
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';

//nessa anotação eu configuro meu component
@Component({
    moduleId: module.id,
    selector: 'listagem', //maneira como vou acessar meu component nas views (nome do component na view)
    templateUrl: './listagem.component.html' //url do template do meu component
})

export class ListagemComponent {

    fotos: FotoComponent[] = [];

    constructor(service: FotoService){

        service.lista().subscribe(
                    fotos => this.fotos = fotos,
                    erro => console.log(erro)
                );
    }
}