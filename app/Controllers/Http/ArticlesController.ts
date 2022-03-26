import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Article from 'App/Models/Article'

export default class ArticlesController {
  async index({ request, view }: HttpContextContract) {
    const { page = 1 } = request.qs()
    const articles = (await Database.from('articles').paginate(page,20)).toJSON()

    for (let [index, article] of articles.data.entries()) {
      article = Article.$createFromAdapterResult(article)
      await article.load('categories')
      articles.data[index] = article
    }

    return view.render('articles/index', { articles: articles.data })
  }

  async getArticle({ request, view, response }: HttpContextContract) {
    try {
      const { slug } = request.params()
      const article = await Article.findByOrFail('slug', slug)
      await article.load('categories')
      return view.render('articles/article', { article })
    } catch (error) {
      return response.status(404).send('Article not found')
    }
  }
}
