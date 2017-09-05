import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {


  heroes:any[] = [];

  //para utilizar el servicio se debe crear una carpeta service, generar el ts
  //correspondiente ng2service... y en el constructor pasar por parametro una
  //propiedad privada de tipo de la clase del servicio.
  constructor( private _heroesService: HeroesService,
               private router:Router
  ) {
    console.log("Constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");

    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx:number){

    this.router.navigate( ['/heroe', idx] )
  }

}
