using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace backend.Models
{
    public class DailyPriceModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string ID { get; set; }
        [BsonElement("name")]
        public string Name { get; set; }
        [BsonElement("price")]
        public double Price { get; set; }
        [BsonElement("datetime")]
        public DateTime Datetime { get; set; } = DateTime.Now;
        [BsonElement("marketid")]
        public string MarketId { get; set; }

    }
}

//IDyDGTYOmeztCY0n