using FastEndpoints;
using PMS.API.Contracts;
using PMS.API.Data;
using PMS.API.Domain;

namespace PMS.API.EndPoints;

public class CreateProductEndpoint(ProductDbContext context) : Endpoint<CreateProductRequestDTO, CreateProductResponseDTO>
{ 
    public override void Configure()
    {
        Post("/api/products");
        AllowAnonymous();
    }

    public override async Task HandleAsync(CreateProductRequestDTO req, CancellationToken ct)
    {
        var product = new Product
        {
            Name = req.Name,
            Description = req.Description,
            Price = req.Price,
            ImageUrl = req.ImageUrl,
            CreatedDate = DateTime.UtcNow
        };

        context.Products.Add(product);
        await context.SaveChangesAsync(ct);

        await SendAsync(new CreateProductResponseDTO { Id = product.Id , Message = "Product created successfully"}, 
            StatusCodes.Status201Created, ct);
    }
}