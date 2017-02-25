import { Component } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    foto: FotoComponent = new FotoComponent();
    http: Http;
    meuForm: FormGroup;

    constructor(http: Http, fb: FormBuilder){
        this.http = http;

        this.meuForm = fb.group({
            titulo: ['', Validators.compose(
                                        [Validators.required, Validators.minLength(4)]
                                    )],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event: Event) {
        event.preventDefault();
        console.log(this.foto);

        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        this.http.post('v1/fotos', JSON.stringify(this.foto), { headers: headers})
                .subscribe(() => {
                    this.foto = new FotoComponent();
                    console.log("Foto salva com sucesso");
                }, erro => console.log(erro));
    }
}