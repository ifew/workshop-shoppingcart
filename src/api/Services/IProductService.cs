using System.Collections.Generic;
using api.Models;

namespace api.Services
{
    public interface IProductService
    {
        ProductsModel getProductDetail(int id);
        ProductsListModel list(string age, string gender);
        List<ProductsModel> list_products(string age, string gender);

    }
}