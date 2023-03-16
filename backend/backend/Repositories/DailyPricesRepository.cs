using backend.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace backend.Repositories
{
    public class DailyPricesRepository : IRepository
    {
        IMongoCollection<DailyPriceModel> dailyPriceCollection;

        public DailyPricesRepository()
        {
            var settings = MongoClientSettings.FromConnectionString("mongodb+srv://agroapp:IDyDGTYOmeztCY0n@cluster0.cfqmsap.mongodb.net/?retryWrites=true&w=majority");
            settings.ServerApi = new ServerApi(ServerApiVersion.V1);
            var client = new MongoClient(settings);
            var database = client.GetDatabase("agroapp");
            dailyPriceCollection = database.GetCollection<DailyPriceModel>("dailyprice");
        }

        public void Add(DailyPriceModel dailyPrice)
        {
            dailyPrice.ID = ObjectId.GenerateNewId().ToString();
            dailyPriceCollection.InsertOne(dailyPrice);
        }

        public void Delete(string id)
        {
            throw new NotImplementedException();
        }

        public List<DailyPriceModel> GetAll()
        {
            throw new NotImplementedException();
        }

        public List<DailyPriceModel> GetAllByName(string name)
        {
            throw new NotImplementedException();
        }

        public DailyPriceModel GetById(string id)
        {
            throw new NotImplementedException();
        }

        public void Update(DailyPriceModel item)
        {
            throw new NotImplementedException();
        }
    }
}
