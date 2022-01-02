'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MoviesSchema extends Schema {
  up () {
    this.create('movies', (table) => {
      table.increments()
      table.string('nome'),
      table.date('data_lancamento'),
      table.string('genero'),
      table.text('sinopse')
      table.timestamps()
    })
  }

  down () {
    this.drop('movies')
  }
}

module.exports = MoviesSchema
