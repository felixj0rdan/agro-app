using backend.Models;

namespace backend.Repositories
{
    public interface IRepository
    {
        public List<DailyPriceModel> GetAll();
        public DailyPriceModel GetById(string id);
        public List<DailyPriceModel> GetAllByName(string name);
        public void Add(DailyPriceModel item);
        public void Delete(string id);
        public void Update(DailyPriceModel item);
    }
}
