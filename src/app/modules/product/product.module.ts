import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductRouteModule } from './product-route.module';

import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent],
  imports: [ProductRouteModule, SharedModule],
})
export class ProductModule {}
