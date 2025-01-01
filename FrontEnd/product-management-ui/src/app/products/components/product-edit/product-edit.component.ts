import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api'; 
import { ProductService } from '../../../core/services/product.service';

@Component({
    selector: 'app-product-edit',
    templateUrl: './product-edit.component.html',
    standalone:false
})
export class ProductEditComponent implements OnInit {
    form: FormGroup;
    id: number;
    imageUrl: string = '';
    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService,
        private messageService: MessageService
    ) {
        this.id = this.route.snapshot.params['id'];
        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.maxLength(100)]],
            description: ['', [Validators.required, Validators.maxLength(500)]],
            price: [0, [Validators.required, Validators.min(0)]],
            imageUrl: ['']
        });
    }

    ngOnInit(): void {
        this.loadProduct();
    }

    loadProduct(): void {
        this.productService.getProduct(this.id).subscribe({
            next: (product) => {
                this.form.patchValue(product);
            },
            error: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to load product'
                });
                this.router.navigate(['/products']);
            }
        });
    }
    onImageUrlChange(): void {
      this.imageUrl = this.form.get('imageUrl')?.value;
  }
    onSubmit(): void {
        if (this.form.valid) {
            this.productService.updateProduct(this.id, this.form.value).subscribe({
                next: () => {
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Product updated successfully'
                    });
                    this.router.navigate(['/products']);
                },
                error: () => {
                    this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Failed to update product'
                    });
                }
            });
        }
    }
}