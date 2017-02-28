
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})

export class FotoComponent {

    //o @Input habilita a entrada de dados
    @Input() titulo: string;
    @Input() url: string;
    descricao: string;

}