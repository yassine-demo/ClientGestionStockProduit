import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component'; // Import the ProduitComponent
import { ProduitMockService } from './produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [AppComponent, ProduitComponent, NavbarComponent, SidebarComponent, ContentComponent, DashboardComponent], // Add ProduitComponent to declarations
  imports: [BrowserModule, AppRoutingModule],
  providers: [ProduitMockService],
  bootstrap: [AppComponent]
})
export class AppModule {}
