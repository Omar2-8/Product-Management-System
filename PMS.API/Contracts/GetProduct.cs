namespace PMS.API.Contracts;

public class GetProductResponseDTO
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Description { get; set; }
    public decimal Price { get; set; }
    public string? CreatedDate { get; set; }
    public string? ImageUrl { get; set; }
}