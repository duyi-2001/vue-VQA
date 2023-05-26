<template>
  <el-card class="box-card mg-1 p-6">
    <div>
      <el-text class="text-xl text-dark-900 font-bold">历史记录</el-text>
    </div>

    <div class="mt-2 mb-2">
      <el-text class="">您所提交的视频质量评估结果显示如下</el-text>
    </div>

    <div>
      <el-table :data="records" style="width: 100%">
        <el-table-column label="视频名">
          <template #default="scope">
            <a
                :href="scope.row.videoUrl"
                target="_blank"
                title="点击跳转到视频"
                style="color: inherit; "
            >
              {{ scope.row.name }}
            </a>
          </template>
        </el-table-column>

        <el-table-column prop="time" label="时长/s">
        </el-table-column>
        <el-table-column prop="uploadTime" label="提交时间">
        </el-table-column>
        <el-table-column sortable prop="quality"  label="质量分数/百分制">
        </el-table-column>
      </el-table>
    </div>

  </el-card>
</template>

<script>
// import api from "@/api/index";
import * as https from "https";

export default {
  name: "history_record",
  data(){
    return {
      records: [
        {
          name: "demo",
          time: "8.3",
          uploadTime: "2023-05-04-05:20",
          quality: "99",
          videoUrl: 'https://yiyi-picture.oss-cn-hangzhou.aliyuncs.com/image/2023-05-25-17-16-30.619904500-demo.mp4'
        },
        {
          name: "demo4",
          time: "8.1",
          uploadTime: "2023-05-04-05:20",
          quality: "95.2",
          videoUrl: 'https://yiyi-picture.oss-cn-hangzhou.aliyuncs.com/image/2023-05-25-17-16-30.619904500-demo.mp4'
        }
      ]
    }
  },
  methods:{

  }
}
</script>