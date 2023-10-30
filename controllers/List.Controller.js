const List = require("../models/List");
// const { Config } = require("../config");
const Joi = require("@hapi/joi");
const Boom = require("boom");
const universalFunctions = require("../utils/universalFunctions");

module.exports = {
  
    getLists: async (req, res) => {
    try {
    //    const schema = Joi.object({
    //     limit: Joi.number(),
    //     page: Joi.number(),
    //   });
    //   await universalFunctions.validateRequestPayload(req.body, res, schema);

     
      const  list = await List
        .find()
       

     
      if (list === null) {
        throw Boom.badRequest("cannot find any list");
      }
      universalFunctions.sendSuccess(
        {
          statusCode: 200,
          message: "All users are",
          data: {
            list,
          },
        },
        res
      );
    } catch (error) {
      universalFunctions.sendError(error, res);
    }
  },
  addNewList: async (req, res) => {
    try {
    //    const schema = Joi.object({
    //     title: Joi.string(),
    //     description: Joi.string(),
    //   });
    //   await universalFunctions.validateRequestPayload(req.body, res, schema);

     
    const schema = Joi.object({
        
        title:Joi.string().allow(''),
  description:Joi.string(),
  tag:Joi.string(),
  
  
      });
      await universalFunctions.validateRequestPayload(req.body, res, schema);


      let newList=await List.create(req.body);
      console.log('hii',newList)
      if(newList!==null){
      universalFunctions.sendSuccess(
        {
          statusCode: 200,
          message: "New list created",
          data: {
            newList
          },
        },
        res
      );
    }
    } catch (error) {
      universalFunctions.sendError(error, res);
    }
  },
  deleteList: async (req, res) => {
    try {
        console.log(req.params,'deleteList')
        const data = await List.findByIdAndDelete({ _id: req.params.id });
        console.log(data,'hidata')
        if (!data) {
          throw Boom.badRequest("invalid id list couldnt be deleted");
        }
    
        universalFunctions.sendSuccess(
          {
            statusCode: 200,
            message: "completely deleted list",
          },
          res
        );
    
    } catch (error) {
      universalFunctions.sendError(error, res);
    }
  },
  
};