import { useRouter } from 'vue-router'
import {getToken} from '@/utils/encryption'

export default defineNuxtRouteMiddleware(async () => {
  const router = useRouter()

  // Get the token from localStorage
  const token = await getToken();

  // If no token, redirect to enter and experience page
  if (!token) {
    return router.push('/')
  }

  // try {
  //   // Validate the token 
  //   const response = await fetch('https://futuremultiverse.com/token/check', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ token })
  //   })

  //   const data = await response.json()

  //   // If the token is invalid, redirect to /enter_and_experience
  //   if (!data.status) {
  //     return router.push('/enter_and_experience')
  //   }
  // } catch (error) {
  //   console.error('Token validation failed:', error)
  //   return router.push('/enter_and_experience')
  // }
})
