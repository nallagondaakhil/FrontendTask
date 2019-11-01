import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { ContactComponent } from './contact/contact.component';
import { SerivceComponent } from './serivce/serivce.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [HistoryComponent, ContactComponent, SerivceComponent, AboutComponent],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
