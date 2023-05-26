<template>
  <el-container class="home-container">
    <!--           头部-->
    <el-header>
      <div class="nav shadow-xl">
        <el-menu
            active-text-color="#cbd5e1"
            text-color="#64748B"
            :default-active="1"
            mode="horizontal"
            :ellipsis="false"
        >
          <el-menu-item :span="4" index="0">U G C 视 频 质 量 在 线 评 估</el-menu-item>
          <div class="flex-grow"/>
        </el-menu>
      </div>

    </el-header>
    <el-container>
      <!--            侧边栏-->
      <el-aside>
        <el-menu
            active-text-color="#93c5fd"
            background-color="#ffffff"
            default-active="0"
            text-color="#64748B"
            router="true"
        >
          <div v-for="item in menu">
            <div v-if="item.children == null">
              <el-menu-item :index="item.path" :key="item.id" class="text-gray-500">
                <span>{{ item.title }}</span>
              </el-menu-item>
            </div>
            <div v-else>
              <el-sub-menu :index="item.path" :key="item.id">
                <template #title>
                  <span>{{ item.title }}</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item v-for="(child, index) in item.children" :index="child.path"
                                :key="index"
                                class="text-teal-500">
                    <span> {{ child.title }} </span>
                  </el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
            </div>
          </div>
        </el-menu>
      </el-aside>
      <!--            主体-->
      <el-main>
        <!--                <modelpage/>-->
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      menu: [
        {
          id: 1,
          index: '1',
          title: '主 页',
          path: '/about'
        },
        {
          id: 2,
          index: '2',
          title: '在线评估',
          path: '/assess'
        },
        {
          id: 3,
          index: '3',
          title: '历史记录',
          path: '/history_record'
        // },
        // {
        //   id: 4,
        //   index: '4',
        //   title: '结果分析',
        //   path: '/'
        }
      ]
    }
  }
}
</script>


<style scoped>
.home-container {
  height: 100%;
}

.el-container {
  width: 100%;
  max-width: none;
}

.el-header {
  padding: 0;
}

.nav {
  margin: 0;
}

.el-aside {
  padding: 20px;
  padding-top: 40px;
}

.el-main {
  padding: 20px;
}

.el-menu-item:hover {
  background: #e2e8f0;
}

</style>