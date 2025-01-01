using FastEndpoints;
using Microsoft.EntityFrameworkCore;
using PMS.API.Contracts;
using PMS.API.Data;
using PMS.API.Mapping;

namespace PMS.API.EndPoints;

public class UpdateProductEndpoint(ProductDbContext context) : Endpoint<UpdateProductRequestDTO>
{
    public override void Configure()
    {
        Put("/api/products/{id}");
        AllowAnonymous();
    }

    public override async Task HandleAsync(UpdateProductRequestDTO req, CancellationToken ct)
    {
        var product = await context.Products.FirstOrDefaultAsync(x => x.Id == req.Id, ct);

        if (product is null)
        {
            await SendNotFoundAsync(ct);
            return;
        }
        product.ToUpdatedEntity(req);

        await context.SaveChangesAsync(ct);
        await SendOkAsync(ct);
    }
}
