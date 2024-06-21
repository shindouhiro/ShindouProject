<template>
    <div class="users-component">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';



const tableData = ref([]);
const { $axios } = useNuxtApp();

onMounted(async () => {
  try {
    const response = await $axios.get('/api/example');
    tableData.value = response.data.message;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});
</script>

<style scoped>
.users-component {
    padding: 50px;
    text-align: center;
    color: #333;
}
</style>