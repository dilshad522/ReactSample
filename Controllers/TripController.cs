using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using React.Data.Models;
using React.Data.Services;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace React.Controllers
{

    [ApiController]
    [Produces("application/json")]
    [Route("[controller]")]
    public class TripController : ControllerBase
    {

        private ITripService _service;
        // GET: /<controller>/
        public TripController(ITripService service)
        {
            this._service = service;

        }

        [HttpGet]
        public IActionResult Get()
        {
            var allTrips = _service.GetAllTrips();
            return Ok(allTrips);
        }

        [HttpGet("GetTripbyId/{id}")]
        public IActionResult GetTripById(int id)
        {
            var trip = _service.GetTripbyId(id);
            return Ok(trip);
        }

        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody]Trip trip)
        {
            if (trip!=null)
            {
                _service.AddTrip(trip);
            }
           
            return Ok();

        }

        [HttpPut("UpdateTrip/{id}")]
        public IActionResult UpdateTrip(int id,[FromBody] Trip trip)
        {
            _service.UpdateTrip(id, trip);
            return Ok(trip);
        }

        [HttpDelete("DeleteTrip/{id}")]
        public IActionResult DeleteTrip(int id)
        {
            _service.DeleteTrip(id);
            return Ok();
        }
    }
}
