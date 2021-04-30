using System;
using System.Collections.Generic;
using React.Data.Models;

namespace React.Data.Services
{
    public interface ITripService
    {
        List<Trip> GetAllTrips();

        Trip GetTripbyId(int tripId);

        void UpdateTrip(int tripId,Trip trip);

        void DeleteTrip(int tripId);

        void AddTrip(Trip trip);
    }
}
