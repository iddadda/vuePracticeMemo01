// Form.vue

<script setup>
import { reactive, onMounted } from "vue";
import httpService from "@/services/HttpService";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const state = reactive({
  memo: {
    id: 0,
    title: "",
    content: "",
    createdAt: "",
  },
});

onMounted(async () => {
  const id = route.params.id;
  const data = await httpService.findById(id);
  state.memo = data.resultData;
});

const moveToForm = () => {
  // 객체로 전송할 수 없기 때문에 문자열로 변경해줌 (직렬화)
  const json = JSON.stringify(state.memo);

  router.push({
    path: "/memo/add",
    state: {
      data: json,
    },
  });
};
</script>

<template>
  <div class="mb-3">등록일시: {{ state.memo.createdAt }}</div>
  <div class="mb-3">제목: {{ state.memo.title }}</div>
  <div class="mb-3">내용: {{ state.memo.content }}</div>

  <button type="button" class="btn btn-primary w-100 py-3" @click="moveToForm">
    수정
  </button>
</template>

<style lang="scss" scoped></style>
