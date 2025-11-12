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
        console.log('Api.getMe - Making request to /auth/me');
        const response = await backendRoute.get('/auth/me', { withCredentials: true });
        console.warn('Api.getMe - Response:', response)
        return response;
      }catch(e){
        console.error('Api.getMe - Error:', e);
        throw e;
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

    // User endpoints
    // getUser: async function () {
    //   try {
    //     console.log('Api.getUser - Making request to /user/me');
    //     const response = await tehklyRoute.get('/user/me', { withCredentials: true });
    //     console.log('Api.getUser - Response:', response);
    //     return response;
    //   } catch(e: any) {
    //     console.error('Api.getUser - Error:', e);
    //     console.error('Api.getUser - Error response:', e?.response);
    //     throw e;
    //   }
    // },

    // Subscription Plan endpoints
    getAllSubscriptionPlans: async function () {
      try {
        const response = await backendRoute.get('/subscription')
        return response
      } catch(e) {
        console.log(e)
        throw e
      }
    },

    getSubscriptionPlanById: async function (id: string) {
      try {
        const response = await backendRoute.get(`/subscription/${id}`)
        return response
      } catch(e) {
        console.log(e)
        throw e
      }
    },

    getSubscriptionPlansByService: async function (service: string) {
      try {
        const response = await backendRoute.get(`/subscription/service/${service}`)
        return response
      } catch(e) {
        console.log(e)
        throw e
      }
    },

    createSubscriptionPlan: async function (data: any) {
      try {
        const response = await backendRoute.post('/subscription', data)
        return response
      } catch(e) {
        console.log(e)
        throw e
      }
    },

    updateSubscriptionPlan: async function (id: string, data: any) {
      try {
        const response = await backendRoute.patch(`/subscription/${id}`, data)
        return response
      } catch(e) {
        console.log(e)
        throw e
      }
    },

    deleteSubscriptionPlan: async function (id: string) {
      try {
        const response = await backendRoute.delete(`/subscription/${id}`)
        return response
      } catch(e) {
        console.log(e)
        throw e
      }
    },
}

export default Api