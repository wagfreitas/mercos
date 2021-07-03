import { Menu } from "./menu.model";

export const horizotalMenuItems = [
    new Menu(1, 'Autenticaçao', '', '' , '', true, 0),
    new Menu(2, 'Login', '/login', '' , '', false, 1),
    new Menu(3, 'Cadastro', '/registrar', '','', false, 1),
    new Menu(4, 'Produtos', '/produtos', '','', false, 0)
]

export const verticalMenuItems = [
  new Menu(1, 'Login', '/login', '' , '', false, 0),
  new Menu(2, 'Cadastro', '/registrar', '','', false, 0),
  new Menu(3, 'Produtos', '/produtos', '','', false, 0)
]
