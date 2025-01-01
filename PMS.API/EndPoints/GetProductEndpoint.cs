using FastEndpoints;
using Microsoft.EntityFrameworkCore;
using PMS.API.Data;
using PMS.API.Mapping;

namespace PMS.API.EndPoints;

public class GetProductEndpoint(ProductDbContext context) : EndpointWithoutRequest
{
    public override void Configure()
    {
        Get("/api/products/{id}");
        AllowAnonymous();
    }

    public override async Task HandleAsync(CancellationToken ct)
    {
        var id = Route<int>("id");
        var product = await context.Products.FirstOrDefaultAsync(x => x.Id == id, ct);

        if (product is null)
        {
            await SendNotFoundAsync(ct);
            return;
        }
        await SendAsync(product.ToDTO(), cancellation: ct);
    }
}