import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';

import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TaskbarItemComponent } from './taskbar/taskbar-item/taskbar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    TaskbarComponent,
    DesktopComponent,
    TaskbarItemComponent
  ],
  imports: [
    BrowserModule,
    Ng2DragDropModule.forRoot()
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
