import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api'; 
import { ProductService } from '../../../core/services/product.service';

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    standalone:false
})
export class ProductCreateComponent {
    form: FormGroup;
    imageUrl:string = ''
    constructor(
        private fb: FormBuilder,
        private productService: ProductService,
        private messageService: MessageService,
        private router: Router
    ) {
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(100)]],
            description: ['', [Validators.required, Validators.maxLength(500)]],
            price: [0, [Validators.required, Validators.min(0)]],
            imageUrl: ['']
        });
    }
    onImageUrlChange(): void {
      this.imageUrl = this.form.get('imageUrl')?.value;
  }
    onSubmit(): void {
        if (this.form.valid) {
            this.productService.createProduct(this.form.value).subscribe({
                next: () => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Product created successfully'
                    });
                    this.router.navigate(['/products']);
                },
                error: (err : any) => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: err.error.errors[0].reason
                    });
                }
            });
        }
    }
}