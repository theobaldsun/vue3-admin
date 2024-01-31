<template>
  <div>
    <div class="container">
      <div class="loginBox">
          <el-form ref="formRef" :model="form" :rules="rules" label-width="120px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="form.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="form.password" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit(formRef)">登录</el-button>
            </el-form-item>
          </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';

import useUserStore from '@/store/modules/user'
import {useRouter} from 'vue-router'
import type { FormRules, FormInstance } from 'element-plus'

interface RuleForm {
  username: string
  password: string
}
// do not use same name with ref
const form = reactive<RuleForm>({
  username: 'admin',
  password: '111111',
})
let useStore = useUserStore()
let $router = useRouter()
const formRef = ref<FormInstance>()
const rules = reactive<FormRules<RuleForm>>({
  username: [
    {required: true, message: '用户名不能为空', trigger: 'blur'},
    {min: 5, max: 11, message: 'Length should be 5 to 11', trigger: 'blur'}
  ],
  password: [
  {required: true, message: '密码不能为空', trigger: 'blur'},
  ]
})

const onSubmit = async (_form: FormInstance | undefined) => {
  // console.log('formRef', formRef, formRef.value);
  // const valid = await formRef.value?.validate()
  // console.log('valid', valid);
  // return
  if(!_form) {
    return
  }
  await _form.validate(valid => {
    if(valid) {
      useStore.userLogin(form).then(_ =>{
        $router.push('/')
      })
    }
  })
  
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  padding: none;
  margin: none;
  border: none;
  .loginBox {
    width: 300px;
    height: 400px;
    border: 1px solid #e0e0e0;
  }
}
</style>
