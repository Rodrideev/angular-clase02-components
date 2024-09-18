import { Component } from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  template: `
    <main>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum neque corporis et error minus laudantium fugiat, commodi nemo 
        earum alias id suscipit recusandae iure, quidem iste perferendis rem, 
        expedita vel!</p>
    </main>
  `,
  styles: `
  main{
    padding-left: 350px;
    position: relative;
    bottom: 500px;
  }
  p{
    color:tomato;
  }
  `
})
export class MainWrapperComponent {

}
