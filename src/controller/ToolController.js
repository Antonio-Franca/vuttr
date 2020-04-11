const mongoose = require('mongoose');

const Tool = mongoose.model('tools');

class ToolsController {
    async create(req,res){
        const tools = await Tool.create(req.body)
        return res.status(201).json(tools);
    }

    async index(req,res){
        const { tag } = req.query

		const filters = {}

        if (tag) {
            filters.tags = tag
		}
        const tools = await Tool.find(filters)
        
        if (!tools) {
            return res.status(400).json({
                error: 'Tools not found',
            });
        }
        
        return res.json(tools);
    }

    async deleteID(req,res){
        const tools = await Tool.findByIdAndRemove(req.params.id);

        if (!tools) {
            return res.status(400).json({
                error: 'Tools not found',
            });
        } 

        return res.status(204).json();
    }    
}

module.exports = new ToolsController();

