//importa um decorator que transforma a classe num component
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';
import { PainelComponent } from '../painel/painel.component';

//nessa anotação eu configuro meu component
@Component({
    moduleId: module.id,
    selector: 'listagem', //maneira como vou acessar meu component nas views (nome do component na view)
    templateUrl: './listagem.component.html' //url do template do meu component
})

export class ListagemComponent {

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = '';

    constructor(service: FotoService){

        this.service = service;
        this.service
            .lista()
            .subscribe(fotos => {
                this.fotos = fotos;
            }, erro => console.log(erro));
    }

    remove(foto: FotoComponent, painel: PainelComponent): void {

        this.service.remove(foto)
                    .subscribe(
                        () => {

                            painel.fadeOut(() => {
                                console.log('Foto removida com sucesso');
                                let novasFotos = this.fotos.slice(0);
                                let indice = novasFotos.indexOf(foto);
                                novasFotos.splice(indice, 1);
                                this.fotos = novasFotos;
                                this.mensagem = "Imagem removida com sucesso";
                            });

                        },
                        erro => {
                            console.log(erro);
                            this.mensagem = "Não foi possível remover a foto";
                        }
                    );
    }
}