using backend.Models;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("daily-price")]
    public class DailyPricesController : ControllerBase
    {
        IRepository dailyPricesRepository;
        public DailyPricesController(IRepository _dailyPricesRepository)
        {
            dailyPricesRepository = _dailyPricesRepository;
        }


        [HttpPost("add")]
        public ActionResult AddDailyPrice([FromBody]DailyPriceModel dailyPrice)
        {
            try
            {
                dailyPricesRepository.Add(dailyPrice);

                return Ok();
            }
            catch(Exception e)
            {
                return StatusCode(500);
            }
        }
    }
}
