<template>
    <el-card class="m-6 p-6 box-card">
      <el-text class="text-xl my-1 mx-6">上传需要评估的UGC视频</el-text>
      <el-upload
          class="my-1 mx-6"
          :show-file-list="false"
          drag
          action="http://127.0.0.1:8080/oss/oss/upload"
          method="post"
          multiple
          :on-success="uploadSuccess"
      >
        <el-icon class="el-icon--upload">
          <upload-filled/>
        </el-icon>
        <div class="el-upload__text">
          Drop file here or <em>click to upload</em>
        </div>
        <template #tip>
          <div class="el-upload__tip ml-3">
            mp4 files with a size less than 100M
          </div>
        </template>
      </el-upload>
      <div class="ml-1 my-2 flex justify-center items-center">
        <vue3VideoPlay v-bind="options" poster='https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg'/>
      </div>

      <el-form class="pt-3 my-1 mx-6">
        <el-form-item label="视频链接">
          <el-input disabled="disabled" v-model="video"></el-input>
        </el-form-item>

        <el-button round type="primary" @click="verificationHandle" class="bg-blue-400 w-[80px]"
                   :loading="button.loading" :disabled="button.loading">{{ button.context }}
        </el-button>
      </el-form>
    </el-card>
<!--  显示模型验证结果-->
  <div class="flex -mt-6" style="width: 100%; justify-content: space-around" v-show="resultShow">

    <el-card class="m-6 p-12 box-card flex flex-grow">
      <!--                <div>-->
      <!--                    <el-image style="width: 6rem"-->
      <!--                              src="https://yiyi-picture.oss-cn-hangzhou.aliyuncs.com/Typora/report.svg"/>-->
      <!--                </div>-->
      <p class="text-2xl">评估结果</p>
      <br>
      <p class="italic text-base font-light text-gray-500">{{ result.score }}</p>
    </el-card>
  </div>

</template>

<script>

import {UploadFilled} from "@element-plus/icons-vue";
import {reactive} from "vue";
import axios  from "axios";
export default {
  name: "assess",
  components: {UploadFilled},
  data() {
    return {
      uploadPercentage: 0,
      button: {
        loading: false,
        context: '评估'
      },
      result: '',
      resultShow: false,
      options: reactive({
        width: '1000px', //播放器宽度
        height: '580px', //播放器高度
        color: "#409eff", //主题色
        src: "https://yiyi-picture.oss-cn-hangzhou.aliyuncs.com/image/2023-05-25-17-16-30.619904500-demo.mp4", //视频源
        title: '', //视频名称
        muted: false, //静音
        webFullScreen: false,
        speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
        autoPlay: false, //自动播放
        loop: false, //循环播放
        mirror: false, //镜像画面
        ligthOff: false,  //关灯模式
        volume: 0.3, //默认音量大小
        control: true, //是否显示控制
        controlBtns:['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] //显示所有按钮,
      })
    }
  },
  methods: {
    uploadSuccess(response) {
      console.log(response)
      this.options.src = response
      if(response != ''){
        this.$message({
          message: '上传成功',
          type: 'success'
        })
      }
    },
    videoShow(row){

    },
    verificationHandle() {

      axios.post('', {

      }).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>