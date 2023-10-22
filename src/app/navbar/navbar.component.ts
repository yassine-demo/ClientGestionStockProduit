import { Component , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() showSideBar: boolean = false;

@Output()
showSideBarChange : EventEmitter<boolean> = new EventEmitter<boolean>();



constructor(){ }

afficherSideBar(){
  this.showSideBar = !this.showSideBar;
  this.showSideBarChange.emit(this.showSideBar);
}

}
