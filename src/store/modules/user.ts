import { defineStore } from "pinia";
import type{loginFormData, loginResponseData} from '@/api/user/type'
import type{userState} from './types/type'
import {reqLogin} from '@/api/user/index'

const useUserStore = defineStore('User', {
  state: ():userState => {
    return {
      token: localStorage.getItem('TOKEN')
    }
  },
  actions: {
    async userLogin(data: loginFormData) {
      const result:loginResponseData = await reqLogin(data)
      console.log('result', result);
      if(result.code == 200) {
        this.token = result.data.token as string
        localStorage.setItem('TOKEN', result.data.token as string)
      }
    }
  },
  getters: {

  }
})

export default useUserStore;
