// Form.vue

<script setup>
import { reactive, onMounted } from "vue";
import httpService from "@/services/HttpService";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const state = reactive({
  memo: {
    id: 0,
    title: "",
    content: "",
    createdAt: "",
  },
});
const passData = history.state.data;
onMounted(() => {
  // console.log(passData);
  if (history.state.data) {
    state.memo = JSON.parse(passData);
  }
});

// 저장
const procSubmit = async () => {
  const jsonBody = {
    title: state.memo.title,
    content: state.memo.content,
  };

  // 백엔드와 통신한 데이터를 담을 변수 선언
  let data = null;
  let path = "/";
  if (history.state.data) {
    jsonBody.id = state.memo.id;
    path = `/memos/${jsonBody.id}`;
    data = await httpService.modify(jsonBody);
  } else {
    data = await httpService.save(jsonBody);
  }

  // 수정, 등록 완료시 화면 이동
  if (data.resultData === 1) {
    router.push({ path });
  } else {
    alert(data.resultMessage);
  }
};
</script>

<template>
  <form class="detail" @submit.prevent="procSubmit">
    <div class="mb-3" v-if="state.memo.createdAt">
      등록일시: {{ state.memo.createdAt }}
    </div>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        type="text"
        id="title"
        class="form-control p-3"
        v-model="state.memo.title"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea
        id="content"
        class="form-control p-3"
        v-model="state.memo.content"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary w-100 py-3">
      {{ state.memo.id > 0 ? "수정하기" : "저장하기" }}
    </button>
  </form>
</template>

<style scoped></style>
