import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpComponent } from './simp/simp.component';
import { MathService } from './math.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimpComponent],
  providers: [MathService],
  exports: [SimpComponent]
})
export class SampModule { }
