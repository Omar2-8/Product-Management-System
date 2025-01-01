using FastEndpoints;
using Microsoft.EntityFrameworkCore;
using PMS.API.Contracts;
using PMS.API.Data;
using PMS.API.Mapping;

namespace PMS.API.EndPoints;

public class GetProductsEndpoint(ProductDbContext context) : EndpointWithoutRequest<List<GetProductResponseDTO>>
{ 

    public override void Configure()
    {
        Get("/api/products");
        AllowAnonymous();
    }

    public override async Task HandleAsync(CancellationToken ct)
    {
        var products = await context.Products.ToListAsync(ct);

        await SendAsync(products.ToDTOs(), cancellation: ct);
    }
}