<script lang="ts" setup>
    import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()


// **==============================>🗾 表单数据相关 ✍<==============================**
const validatePass = (rule: any, value: any, callback: any) => {
    const phone = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/
    if (value === ''|| !phone.test(value)) {
        callback(new Error('请输入正确的11位手机号'))
    } else {
        if (ruleForm.checkPass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass', () => null)
        }
        callback()
    }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入正确的密码'))
    }  else {
        callback()
    }
}

const ruleForm = reactive({
    pass: '',
    checkPass: '',
})

const rules = reactive<FormRules>({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
   
})
// **==============================>🗾 表单函数相关 ✍<==============================**
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
const myForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    ruleForm.pass = '15012342630'
    ruleForm.checkPass = '5200207'
}
const heartForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    ruleForm.pass = '19150196616'
    ruleForm.checkPass = '5200603'
}
</script>

<template>
    <div class="contaniner">
        <el-card class="box-card" header="登录">
        <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="120px"
            label-position="top"
            class="demo-ruleForm"
            size="large"
        >
            <el-form-item label="账号" prop="pass">
             <el-input v-model="ruleForm.pass"   autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="checkPass">
            <el-input
                v-model="ruleForm.checkPass"
                show-password
                autocomplete="off"
            />
            </el-form-item>
           
            <el-form-item class="login-btn">
            <el-button @click="myForm(ruleFormRef)" type="warning">魔法注入</el-button>
            <el-button @click="heartForm(ruleFormRef)" type="danger">爱心注入</el-button>

            <el-button @click="resetForm(ruleFormRef)">清空</el-button>

            <el-button type="primary" @click="submitForm(ruleFormRef)"
                >登录</el-button
            >
            </el-form-item>
        </el-form>
      </el-card>
    </div>
</template>

<style lang="less" scoped> 
.contaniner {
    width: 100%;
    height: 100%;
    background: url('@/assets/images/login-bg.jpg')  no-repeat;
    background-size: cover;
    text-align: center;
    position: relative;
    .box-card {
        position: absolute;
        left: 60%;
        transform: translate(-50%,60%);
        height: 350px;
         width: 480px;
         ::v-deep .el-form-item__content {
            display: flex;
            justify-content: space-between;
         }
}       
    }

</style>