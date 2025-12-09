import { NewContactDto } from "@/dtos/newContact.dto";
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
        const response = await backendRoute.get('/auth/me', { withCredentials: true });
        return response;
      }catch(e){
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

    getPublicSubscriptionPlans: async function () {
      try {
        const response = await backendRoute.get('/subscription/public')
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

    newContact: async function(data: NewContactDto) {
      try {
        const contactToken = process.env.NEXT_PUBLIC_CONTACT_TOKEN as string;

        const response = await backendRoute.post('/contact', data, {
          headers: {
            'Content-Type': 'application/json',
            'contact-token': contactToken
          },
        })
        return response
      } catch(e) {
        console.log(e)
        throw e
      }
    }
}

export default Api