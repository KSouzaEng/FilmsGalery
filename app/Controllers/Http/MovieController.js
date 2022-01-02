'use strict'
const Movie = use("App/Models/Movie");

class MovieController {

 async index({view}){
    return view.render('form')
  }
  async store({request,response}){

    const m = new Movie();

    const movie = await Movie.create({
      nome:request.input('nome'),
      data_lancamento:request.input('data_lancamento'),
      genero:request.input('genero'),
      sinopse:request.input('sinopse'),
    })
    return response.redirect("/");
  }
}

module.exports = MovieController
