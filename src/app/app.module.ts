import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component'; // Import the ProduitComponent
import { ProduitMockService } from './produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [AppComponent, ProduitComponent, NavbarComponent, SidebarComponent, ContentComponent], // Add ProduitComponent to declarations
  imports: [BrowserModule, AppRoutingModule],
  providers: [ProduitMockService],
  bootstrap: [AppComponent]
})
export class AppModule {}
