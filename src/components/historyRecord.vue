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
                :href="scope.row.url"
                target="_blank"
                title="点击跳转到视频"
                style="color: inherit; "
            >
              {{ scope.row.vname }}
            </a>
          </template>
        </el-table-column>

        <el-table-column prop="length" label="时长/s">
        </el-table-column>
        <el-table-column prop="uploadTime" label="提交时间">
        </el-table-column>
        <el-table-column sortable prop="score"  label="质量分数/百分制">
        </el-table-column>
      </el-table>
    </div>

  </el-card>
</template>

<script>
import axios from "axios";
export default {
  name: "history_record",
  data(){
    return {
      records: [
      ]
    }
  },
  methods:{

  },
  created() {
    axios.post('http://127.0.0.1:8080/oss/inference/getVideoHistoryList',{}).then(res=>{
      console.log(res)
      if(res.data.code == '200'){
        this.records = res.data.videoHistoryList
      }
    }).catch(err=>{
      console.log(err)
      this.$message({
        message: '获取历史记录失败',
        type: 'error'
      });
    })
  }
}
</script>