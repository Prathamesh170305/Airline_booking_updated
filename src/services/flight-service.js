const {FlightRepository , AirplaneRepository}=require('../repository/index');

class FlightService{

    constructor(){
        this.airplaneRepository=new AirplaneRepository();
        this.flightRepository=new FlightRepository();
    }
    async createFlight(data){
        try{
            const airplane =await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight=await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity});
            return flight;
        }
        catch(error){
            console.log('something is wrong in the flight service layer');
            throw{error};
        }
    }

    async getAllFlightData(data){
        try {
            const flights=await this.flightRepository.getAllFlights(data);
            return flights;
        } catch (error) {
            console.log('Something went wrong in the flight service(get all flight data');
            throw{error};
        }
    }
}

module.exports=FlightService;
//here we will need to fetch the totalseats from the airplane repo