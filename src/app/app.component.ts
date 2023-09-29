import { Component } from '@angular/core';
import { BuscaCepService } from './service/busca-cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Busca-Cep';
  cep: string = '';
  cepData: any = [];

  constructor(private cepService: BuscaCepService) { }

  pesquisarcep() {
    this.cepService.getCep(this.cep).subscribe((data: any) => {
      this.cepData = data;
      console.log(this.cepData);
    })
  }
}
