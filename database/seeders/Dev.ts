import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Article from 'App/Models/Article'
import Category from 'App/Models/Category'
import User from 'App/Models/User'

export default class DevSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run () {
    // Write your database queries inside the run method
    if ((await User.all()).length === 0) {
      await User.create({
        username: 'admin',
        password: 'admin',
      })
    }

    if ((await Category.all()).length === 0) {
      await Category.createMany([
        { label: 'Développement', slug: 'developpement' },
        { label: 'Études', slug: 'etudes' },
        { label: 'Expérience', slug: 'experience' },
      ])
    }

    if ((await Article.all()).length === 0) {
      await Article.createMany([
        {
          title: 'Développeur web',
          slug: 'developpeur-web',
          description: 'Développeur web',
          content: 'Développeur web',
          published: true,
        },
        {
          title: "Créer son serveur Minecraft",
          slug: "creer-son-serveur-minecraft",
          description: "Créer son serveur Minecraft",
          content: "Créer son serveur Minecraft",
          published: true,
        },
        {
          title: "Comment augmenter son nombre de visiteurs",
          slug: "comment-augmenter-son-nombre-de-visiteurs",
          description: "Comment augmenter son nombre de visiteurs",
          content: "Comment augmenter son nombre de visiteurs",
          published: false,
        },
      ])
    }
  }
}
