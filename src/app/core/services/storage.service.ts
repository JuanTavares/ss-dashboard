import { Injectable } from '@angular/core';

const KEY = 'usuario-logado';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  salvarLocal(email: string, password: string) {
    localStorage.setItem(KEY, JSON.stringify({ email, password }));
  }

}
