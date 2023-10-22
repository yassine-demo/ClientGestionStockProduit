import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // Import the DashboardComponent
import { ProduitComponent } from './produit/produit.component'; // Import the ProduitComponent

const routes: Routes = [
  { path: 'content', component: ContentComponent },
  { path: 'dashboard', component: DashboardComponent }, // Add the route for 'dashboard'
  { path: 'produit', component: ProduitComponent }, // Add the route for 'produit'
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
