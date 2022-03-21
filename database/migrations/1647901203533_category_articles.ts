import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CategoryArticles extends BaseSchema {
  protected tableName = 'category_articles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('category_id').unsigned().references('id').inTable('categories').onDelete('CASCADE')
      table.integer('article_id').unsigned().references('id').inTable('articles').onDelete('CASCADE')
      table.unique(['category_id', 'article_id'])
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
