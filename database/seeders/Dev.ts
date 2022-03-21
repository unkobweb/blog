import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
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
  }
}
