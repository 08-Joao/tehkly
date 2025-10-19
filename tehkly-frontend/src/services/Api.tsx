import { backendRoute, authRoute } from "./httpClient";

const Api = {
    signout: async function () {
        try {
            const response = await authRoute.post('/auth/signout', {}, { withCredentials: true })

            return response
        } catch(e) {
            console.log(e)
        }
    },
    getMe: async function () {
      try{
        const response = authRoute.get('/auth/me', { withCredentials: true })

        return response
      }catch(e){
        console.log(e)
      }  
    },
    verifyToken: async function () {
      try{
        const response = authRoute.get('/auth/verify-token', { withCredentials: true })

        return response
      }catch(e){
        console.log(e)
      }  
    },
}

export default Api