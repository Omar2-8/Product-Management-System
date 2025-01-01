import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api'; 
import { Product } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    standalone: false
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];
    filteredProducts: Product[] = [];
    priceRange: number[] = [0, 1000]; 
    minPrice: number = 0;
    maxPrice: number = 1000;

    constructor(
        private productService: ProductService,
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loadProducts();
    }

    loadProducts(): void {
        this.productService.getProducts().subscribe({
            next: (data) => {
                this.products = data;
                this.filteredProducts = data;  
            },
            error: () => this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Failed to load products'
            })
        });
    }

    filterByPrice(): void {
        this.minPrice = this.priceRange[0];
        this.maxPrice = this.priceRange[1];
        this.filteredProducts = this.products.filter(product =>
            product.price >= this.minPrice && product.price <= this.maxPrice
        );
    }

    onDelete(id: number): void {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this product?',
            accept: () => {
                this.productService.deleteProduct(id).subscribe({
                    next: () => {
                        this.messageService.add({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'Product deleted successfully'
                        });
                        this.loadProducts();
                    },
                    error: () => this.messageService.add({
                        severity: 'error',
                        summary: 'Error',
                        detail: 'Failed to delete product'
                    })
                });
            }
        });
    }

    onEdit(id: number): void {
        this.router.navigate(['/products/edit', id]);
    }
}
