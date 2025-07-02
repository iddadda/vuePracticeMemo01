// Form.vue

<script setup>
import { reactive } from "vue";
import httpService from "@/services/HttpService";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const state = reactive({
  memo: {
    id: 0,
    title: "",
    content: "",
    createdAt: "",
  },
});

// 저장
const procSubmit = async () => {
  const jsonBody = {
    title: state.memo.title,
    content: state.memo.content,
  };
  const data = await httpService.save(jsonBody);
  if (data.resultData === 1) {
    router.push({
      path: "/",
    });
  }

  alert("저장되었습니다.");
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
    <button type="submit" class="btn btn-primary w-100 py-3">저장</button>
  </form>
</template>

<style scoped></style>
