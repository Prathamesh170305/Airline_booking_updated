const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.error("Error in createCity method:", error);
            throw new Error("Something went wrong in the repository layer");
        }
    }

    async deleteCity(cityId) {
        try {
            const deletedCount = await City.destroy({
                where: { id: cityId }
            });

            return deletedCount > 0; // Return true if a city was deleted, false otherwise
        } catch (error) {
            console.error("Error in deleteCity method:", error);
            throw new Error("Something went wrong in the repository layer");
        }
    }

    async updateCity(cityId, data) {
        try {
            const updatedRowsCount = await City.update(data, {
                where: { id: cityId }
            });

            if (updatedRowsCount[0] === 0) {
                throw new Error("City not found or no changes made");
            }

            // Fetch the updated city manually (MySQL does not support returning)
            const updatedCity = await City.findByPk(cityId);
            return updatedCity;
        } catch (error) {
            console.error("Error in updateCity method:", error);
            throw new Error("Something went wrong in the repository layer");
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);

            if (!city) {
                throw new Error("City not found");
            }

            return city;
        } catch (error) {
            console.error("Error in getCity method:", error);
            throw new Error("Something went wrong in the repository layer");
        }
    }
    async getAllCities(){
        try{
            const cities=await City.findAll();
            return cities;
        }
        catch(error){
            console.log("Something went wrong in the repo layer");
            throw{error};
        }
    }
}

module.exports = CityRepository;
