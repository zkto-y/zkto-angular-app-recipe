import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-layout',
  imports: [RouterModule,
    HeaderComponent,
    FooterComponent,
    HomeComponent],
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
