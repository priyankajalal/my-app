import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatSliderModule } from "@angular/material/slider";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

let myModules: any[] = [
  CommonModule,
  MatSliderModule,
  MatCheckboxModule,
  MatRadioModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [],
  imports: myModules,
  exports: myModules.concat([]),
})
export class MaterialModule {}
