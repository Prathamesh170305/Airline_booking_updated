class CrudServices{
    constructor(repository){
        this.repository=repository;
    }

    async create(data){
        try{
            const response=await this.repository.create(data);
            return response;
        }
        catch(error){
            console.log("sSomething went wrong in the crud services layer");
            throw error;
        }
    }
    async destroy(dataId){
        try{
            const response=await this.repository.destroy(dataId);
            return response;
        }
        catch(error){
            console.log("sSomething went wrong in the crud services layer");
            throw error;
        }
    }
    async get(id){
        try{
            const response=await this.repository.get(id);
            return response;
        }
        catch(error){
            console.log("sSomething went wrong in the crud services layer");
            throw error;
        }
    }
    async getAll(){
        try{
            const response=await this.repository.getAll();
            return response;
        }
        catch(error){
            console.log("sSomething went wrong in the crud services layer");
            throw error;
        }
    }
    async update(id,data){
        try{
            const response=await this.repository.update(data,{
                where:{
                    id:modelId
                },
            });
            return response;
        }
        catch(error){
            console.log("sSomething went wrong in the crud services layer");
            throw error;
        }
    }
}

module.exports=CrudServices;