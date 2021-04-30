using System;
namespace React.Data.Models
{
    public class Trip
    {
        public Trip()
        {
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime DateStarted { get; set; }
        public DateTime? DateCompleted { get; set; }
    }
}
