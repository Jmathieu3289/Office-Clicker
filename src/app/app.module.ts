import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DndModule } from 'ng2-dnd';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    CharacterSheetComponent
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot()
  ],
  exports: [DndModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
