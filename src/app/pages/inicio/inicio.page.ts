import { Component, OnInit } from '@angular/core';

type Pagina = {
  label: string,
  icon: string,
  redirect: string
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  paginas: Pagina[] = [
    {
      label: 'action sheet',
      icon: 'american-football-outline',
      redirect: '/action-sheet'
    },
    {
      label: 'alert',
      icon: 'alert-circle-outline',
      redirect: '/alert'
    },
    {
      label: 'avatar',
      icon: 'beaker-outline',
      redirect: '/avatar'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
