import { useApi } from '~/composable/useApi';

function logoutUser(){
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  localStorage.removeItem('dict')
}

export const useUserSession = () => {
   // token, user is synced with local storage
   const strToken = localStorage.getItem('token');
   const strUser = localStorage.getItem('user');

   return {
    token: strToken,
    user: strUser != null ? JSON.parse(strUser) : {},
    isLoggedIn: () => token !== undefined && token != null && token !== '',
    set setToken(newToken) {
      this.token = newToken;
      localStorage.setItem('token', newToken);
    },
    set setUser(newUser){
      this.user = newUser; 
      localStorage.setItem('user', JSON.stringify(newUser));
    },
    // logoutUser: () => {
    //     localStorage.removeItem('user')
    //     localStorage.removeItem('token')
    //     localStorage.removeItem('dict')
    // },
    checkToken: async() => {
      let tokenResult = false;
      // check token is alive
      if (strToken !== undefined && strToken != null && strToken !== '') {
        const api = useApi()
  
        try {
          const tokenResp = await api.get('User/CheckToken');
          if (tokenResp.status == 401) {
            logoutUser()
          }
          else
            tokenResult = true;
        } catch (error) {
          logoutUser()
        }
      }

      return tokenResult;
    }
   }
}