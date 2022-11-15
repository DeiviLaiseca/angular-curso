import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {
  heroes: string[] = ['Hulk','Capitán América','IronMan','Viuda Escarlata'];
  heroeBorrado: string = '';

  borrarHeroe () {
     this.heroeBorrado = this.heroes.shift() || '';    
  }
}
