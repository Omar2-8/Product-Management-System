import { Component } from '@angular/core'; 
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api'; 


@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    providers: [MessageService],
    template: `
    <div class="min-h-screen bg-gray-100">
        <!-- Header -->
        <nav class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <div class="flex-shrink-0 flex items-center">
                            <h1 class="text-xl font-bold text-gray-800">Product Management</h1>
                        </div>
                        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <a routerLink="/products" 
                               routerLinkActive="border-b-2 border-indigo-500"
                               class="inline-flex items-center px-1 pt-1 text-gray-900">
                                Products
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <router-outlet></router-outlet>
        </main>
    </div>
    `,
    styles: [`
        :host {
            display: block;
            height: 100%;
        }
    `]
})
export class AppComponent { 
  title = 'Product Management System';  

  
}
