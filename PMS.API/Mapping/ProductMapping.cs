using PMS.API.Contracts;
using PMS.API.Domain;

namespace PMS.API.Mapping;

public static class ProductMapping
{
    public static List<GetProductResponseDTO> ToDTOs(this IEnumerable<Product> entities)
        => entities.Select(x => x.ToDTO()!).ToList() ?? [];
    

    public static GetProductResponseDTO? ToDTO(this Product entity)
    {
        return entity == null
            ? null
            : new GetProductResponseDTO
            {
                Id = entity.Id,
                Description = entity.Description,
                Name = entity.Name,
                CreatedDate = entity.CreatedDate.ToString("dddd, MMMM dd yyyy, hh:mm tt"),
                ImageUrl = entity.ImageUrl,
                Price = entity.Price,
            };
    }

    public static Product? ToUpdatedEntity(this Product entity, UpdateProductRequestDTO req)
    {
        if (entity is null) return null;
         
        entity.Name = req.Name;
        entity.Description = req.Description;
        entity.Price = req.Price;
        entity.ImageUrl = req.ImageUrl; 

        return entity; 
    }
}
