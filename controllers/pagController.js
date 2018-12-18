const FilmModels = require('../models/filmModel');

class pagController {
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    async paginate(offset, limit){
        try {
            let films = await FilmModels.findAndCountAll({
                limit: limit,
                offset: offset
            });
            console.log(JSON.stringify(films));
            this.res.render('pagination', {
                films: films.rows
            })
        } catch (error){
            console.error(error);
        }

    }
}

module.exports = pagController;