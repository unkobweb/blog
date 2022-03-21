import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'

export default class Article extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public slug: string

  @column()
  public description: string

  @column()
  public content: string

  @column()
  public published: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Category, {
    localKey: 'id',
    pivotForeignKey: 'article_id',
    relatedKey: 'id',
    pivotRelatedForeignKey: 'category_id',
    pivotTable: 'category_articles',
  })
  public categories: ManyToMany<typeof Category>
}
