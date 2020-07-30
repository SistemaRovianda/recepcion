import { Component, OnInit } from '@angular/core';
import { IngredientsService } from 'src/app/shared/services/ingredients.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.page.html',
  styleUrls: ['./list-ingredient.page.scss'],
})
export class ListIngredientPage implements OnInit {

  constructor(
    private ingredientService:IngredientsService,
    public alertController: AlertController,
    private _router: Router
    ) { }
  displayedColumns: string[] = ['position','nameProduct', 'mark', 'variant', 'presentation','accions'];
  infoIngredients: any;
  ngOnInit() {
    this.search('DRIEF');
  }

  deleteIngredient(id:number,category:string){
    this.ingredientService.deleteIngredient(id).subscribe((data)=>{
      this.Alert('Eliminado','Se ha eliminado el ingrediente');
      this.search(category);
    }, (err)=>{
      this.Alert('Error','No se ha podido eliminar el ingrediente');
      this.search(category);
    })
  }

  search(type:string){
    console.log(type);
    this.ingredientService.getIngredients(type).subscribe((data)=>{
      console.log(data);
      this.infoIngredients=data;
    })
  }

  navigateAdd(){
    this._router.navigate(['addingredient','register'])
  }
  onBack(){
    this._router.navigate(['menu','reception'])
  }

  async Alert(title,message,header = '') {
    const alert = await this.alertController.create({
      header: `${title}`,
      subHeader: `${header}`,
      message: `${message}`,
      buttons: ['OK']
    });

    await alert.present();
  }

}
