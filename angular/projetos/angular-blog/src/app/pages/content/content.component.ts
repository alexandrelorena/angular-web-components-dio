import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: number = 0;

  constructor(private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe((value) => (this.id = value.get(id)));
  //   this.setValuesToComponent(this.id);
  // }
  ngOnInit(): void {
    // O método get() retorna um string | null, por isso é necessário converter para número
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id'); // Obtenha o parâmetro da rota
      this.id = idParam ? Number(idParam) : 0; // Converta para número e trate null
      this.setValuesToComponent(this.id); // Passe o id convertido para o método
    });
  }

  setValuesToComponent(id: number | null) {
    const result = dataFake.filter((article) => article.Id == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
