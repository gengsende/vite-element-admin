<template>
  <el-container>
    <div style="height: 400px; width: 400px; margin: 0px auto">
      <el-form
        ref="formRef"
        label-position="top"
        style="margin-top: 5em"
        :rules="loginRules"
        :model="formState"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input v-model.trim="formState.email" placeholder="请输入用户名/邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model.trim="formState.password"
            type="password"
            placeholder="请输入密码，六位数以上"
            @keyup.enter="goLogin"
          >
          </el-input>
        </el-form-item>
        <el-form-item>
          <div style="display: flex; justify-content: center">
            <el-button type="success" round @click="goLogin" @keyup.enter="goLogin">登录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </el-container>
</template>
<script>
  import { ref, defineComponent, reactive } from 'vue'
  import { ElMessage, ElLoading } from 'element-plus'
  import { useRouter } from 'vue-router'

  export default defineComponent({
    setup: () => {
      const router = useRouter()
      const formRef = ref()
      const formState = reactive({
        email: '',
        password: ''
      })
      const loginRules = reactive({
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
        ]
      })
      const goLogin = async () => {
        await formRef.value.validate(async (valid) => {
          const loadingInstance = ElLoading.service({
            fullscreen: true,
            background: '#2c3e5000'
          })
          try {
            if (valid) {
              const { code, data } = await login(formState)
              console.log(code, data)
              if (code === 200) router.push('/register')
            } else {
              ElMessage('请正确填写表单1')
            }
          } catch (error) {
            console.log(error)
          }
          loadingInstance.close()
        })
      }
      return {
        formRef,
        formState,
        loginRules,
        goLogin
      }
    }
  })
</script>
<style lang="scss"></style>
