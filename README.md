# 메모 만들기

## v-model

- 양방향 바인딩 구현

## router.push({path:"주소"})

- 주소이동

## 메모 추가 통신

```js
  async save(jsonBody) {
    const res = await axios.post("/memo", jsonBody);
  }
```

`axios.post("통신주소", 객체)`
axios 를 이용하면 객체 부분을 알아서 JSON으로 변경해줌.
res에는 respose 객체가 저장된다.

### async, await

Promise 객체에만 사용할 수 있다.
