import { MatSelectModule } from "@angular/material/select";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSliderModule } from "@angular/material/slider";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatRadioModule } from "@angular/material/radio";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material";
import { MatDividerModule } from "@angular/material/divider";

let myModules: any[] = [
  CommonModule,
  MatSliderModule,
  MatCheckboxModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule,
  MatTabsModule,
  MatTableModule,
  MatButtonModule,
  MatDividerModule,
];

@NgModule({
  declarations: [],
  exports: myModules.concat([]),
})
export class MaterialModule {}
