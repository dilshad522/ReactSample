using System;
using System.Collections.Generic;
using System.Linq;
using React.Data.Models;

namespace React.Data.Services
{
    public class TripService:ITripService
    {
        public TripService()
        {
        }

        public void AddTrip(Trip trip)
        {
            Data.Trips.Add(trip);
        }

        public void DeleteTrip(int tripId)
        {
            var trip = Data.Trips.FirstOrDefault(n=>n.Id==tripId);
            if (trip!=null)
            {
                Data.Trips.Remove(trip);
            }
        }

        public List<Trip> GetAllTrips()
        {
            return Data.Trips.ToList();
           
        }

        public Trip GetTripbyId(int tripId)
        {
            return Data.Trips.FirstOrDefault(n => n.Id == tripId);
            
        }

        public void UpdateTrip(int tripId, Trip trip)
        {
            var oldTrip = Data.Trips.FirstOrDefault(n=>n.Id==tripId);
            if (oldTrip!=null)
            {
                oldTrip.Id = tripId;
                oldTrip.Name = trip.Name;
                oldTrip.Description = trip.Description;
                oldTrip.DateStarted = trip.DateStarted;
                oldTrip.DateCompleted = trip.DateCompleted;
            }
        }
    }
}
