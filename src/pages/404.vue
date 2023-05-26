
<template>
  <el-result
      icon="warning"
      title="404 Not Found"
      sub-title="你找的页面丢失了~~稍后重试一下吧"
  >
    <template #extra>
      <el-button type="primary" @click="$router.push('/')">回到首页</el-button>
    </template>
  </el-result>
</template>

<script>
export default {
name: "NotFound"
}
</script>