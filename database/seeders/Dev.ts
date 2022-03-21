import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
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
  }
}
