using FastEndpoints;
using Microsoft.EntityFrameworkCore;
using PMS.API.Data;

namespace PMS.API.EndPoints;

public class DeleteProductEndpoint(ProductDbContext context) : EndpointWithoutRequest
{
    public override void Configure()
    {
        Delete("/api/products/{id}");
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

        context.Products.Remove(product);

        await context.SaveChangesAsync(ct);
        await SendNoContentAsync(ct);
    }
}
