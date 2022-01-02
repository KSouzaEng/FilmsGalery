'use strict'
const Movie = use("App/Models/Movie");
class HomeController {

  async index({view,response}) {

    const movies = await Movie.all()

    // response.send('home', movies)

    return view.render('home',{movies:movies.toJSON()})
  }
  // async show ({ params, request, response, view }) {
  //   const atendimento = await Atendimento.find(params.id_atendimento)
  //   return view.render('atendimento', { atendimento: atendimento.toJSON() })
  //  }
}

module.exports = HomeController
// https://andreluiz.medium.com/iniciando-no-adonisjs-parte-2-4b73d50ef776
