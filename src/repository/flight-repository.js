const {Flights}=require('../models/index');
const {compareTime}=require('../utils/helper');
class FlightRepository{
    async createFlight(data){
        try{
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error:'Arrival time cant be less than departure time'
                }
            }
            const flight =await Flights.create(data);
            return flight;
        }
        catch(error){
            console.log("Something is wrong in the flight-repo ");
            throw{error};
        }
    }
}

module.exports=FlightRepository;