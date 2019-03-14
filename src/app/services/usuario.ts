import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  private usuario: any;
  constructor() {}

  public setDestn(usuario) {
    this.usuario = usuario;
  }

  getDestn() {
    return this.usuario;
  }
}