class Path{
   constructor(){
      this.root = '/'
      this.login = '/login'
      this.register = '/login/register'
      this.userprofile = '/userProfile'
      this.update ='/userProfile/update'
      this.userProject ='/userProfile/userProject'
      this.detail = '/:newsUid'
      
   }
}
export const paths = new Path();