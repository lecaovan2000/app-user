class Path{
   constructor(){
      this.root = '/'
      this.login = '/login'
      this.register = '/login/register'
      this.update ='/profile/update'
      this.userProject ='/profile/Project'
      this.userprofile = '/profile'
      this.detail = '/:newsUid'
      
   }
}
export const paths = new Path();