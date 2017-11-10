import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2DragDropModule } from 'ng2-drag-drop';

import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { TaskbarComponent } from './taskbar/taskbar.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TaskbarItemComponent } from './taskbar/taskbar-item/taskbar-item.component';
import { WindowContentComponent } from './window/window-content/window-content.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { MyFilesComponent } from './window/window-content/my-files/my-files.component';

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    TaskbarComponent,
    DesktopComponent,
    TaskbarItemComponent,
    WindowContentComponent,
    DynamicComponent,
    MyFilesComponent
  ],
  imports: [
    BrowserModule,
    Ng2DragDropModule.forRoot()
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [WindowComponent]
})
export class AppModule { }
