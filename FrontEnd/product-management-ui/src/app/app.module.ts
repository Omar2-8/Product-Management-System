import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './core/services/product.service';
import { provideRouter, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api'; 
import { ProgressSpinnerModule } from 'primeng/progressspinner'; 
import { SliderModule } from 'primeng/slider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    ToastModule,
    ProgressSpinnerModule,
    SliderModule
  ],
  providers: [
    ConfirmationService,
    MessageService,
    ProductService, 
  ],
})
export class AppModule {}
