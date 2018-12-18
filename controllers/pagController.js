const FilmModels = require('../models/filmModel');
const Paginate = require('express-paginate');

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
            //Calculos de paginacion
            let currentPage = offset === 0 ? 1 :(offset/limit)+1;
            let totalCount = films.count;
            let pageCount = Math.ceil(totalCount/limit);
            let pagination = Paginate.getArrayPages(this.req)(10, pageCount, currentPage);

            console.log(JSON.stringify(films));
            this.res.render('pagination', {
                films: films.rows,
                currentPage,
                links: pagination,
                hasNext: Paginate.hasNextPages(pageCount),
                pageCount,
                Paginate
            })
        } catch (error){
            console.error(error);
        }

    }
}

module.exports = pagController;