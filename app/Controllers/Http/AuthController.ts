import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async login ({ request, response, session, auth }: HttpContextContract) {
    const { username, password } = request.all()
    try {
      await auth.use('web').attempt(username, password)
      response.redirect('/')
    } catch {
      session.flash('error', 'Invalid credentials')
      response.redirect('/login')
    }
  }

  public async logout ({ auth, response }: HttpContextContract) {
    await auth.logout()
    response.redirect('/')
  }

  public async getLoginPage ({ view }: HttpContextContract) {
    return view.render('auth/login')
  }
}
