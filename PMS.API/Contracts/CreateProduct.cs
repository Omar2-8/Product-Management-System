namespace PMS.API.Contracts;
public class CreateProductRequestDTO
{
    public required string Name { get; set; }
    public required string Description { get; set; }
    public decimal Price { get; set; }
    public string? ImageUrl { get; set; }
}

public class CreateProductResponseDTO
{
    public int Id { get; set; }
    public string? Message { get; set; }
}