import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragulaModule, DragulaService } from 'ng2-dragula';

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
    DragulaModule
  ],
  exports: [],
  providers: [DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
