<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <el-card class="w-full max-w-md p-8 space-y-6">
      <h2 class="text-center text-2xl font-semibold">Login</h2>

      <el-form
        ref="loginForm"
        :model="loginForm"
        label-position="top"
        @submit.native.prevent="handleLogin"
      >
        <el-form-item label="Username" required>
          <el-input v-model="loginForm.username" placeholder="Enter your username"></el-input>
        </el-form-item>
        
        <el-form-item label="Password" required>
          <el-input v-model="loginForm.password" type="password" placeholder="Enter your password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" native-type="submit" :loading="loading">Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
})
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const loginForm = ref({
  username: '',
  password: '',
});

const loading = ref(false);
const router = useRouter();

const handleLogin = () => {
  // Handle login logic here (e.g., API call, validation)
  console.log('Logging in...', loginForm.value);

  // Simulate loading state (replace with actual login logic)
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    // Redirect to dashboard or home page after login
    router.push('/');
  }, 2000); // Replace with actual API call duration
};
</script>

<style scoped>
/* Scoped styles using Unocss */
</style>
