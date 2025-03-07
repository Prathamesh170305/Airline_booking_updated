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

    async getFlightData(){
        //todo
    }
}

module.exports=FlightService;
//here we will need to fetch the totalseats from the airplane repo