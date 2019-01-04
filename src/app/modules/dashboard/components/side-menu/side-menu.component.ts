import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { UsuarioLogado } from 'src/app/shared/models/usuario-logado';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  isShown = false;
  usuarioLogado: UsuarioLogado;

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.usuarioLogado = JSON.parse(this.storage.getUser());
    console.log(this.usuarioLogado);
  }

  toggle() {
    this.isShown = !this.isShown;
  }

}
