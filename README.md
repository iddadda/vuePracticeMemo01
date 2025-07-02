# 메모 만들기

## v-model

- 양방향 바인딩 구현

## router.push({path:"주소"})

- 주소이동

## 메모 추가 통신

```js
  async save(jsonBody) {
    const res = await axios.post("/memo", jsonBody);
    return res.data;
  }
```

`axios.post("통신주소", 객체)`
axios 를 이용하면 객체 부분을 알아서 JSON으로 변경해줌.
res에는 respose 객체가 저장된다.

### response 객체의 data

서버로부터 받은 응답 데이터를 담는 속성

- HTTP 요청에 대한 응답 처리시 사용
- 데이터 저장 형태: JSON, 텍스트 등
- axios나 fetch와 같은 라이브러리로 응답 객체에서 data 속성으로 데이터를 가져올 수 있음.

### async, await

Promise 객체에만 사용할 수 있다.

## onMounted는 함수이다.

## JSON을 객체로 변경

`JSON.parse(JSON)`

## 객체를 JSON으로 변경

`JSON.stringify(obj)`

## history

history 객체는 브라우저에서 제공하는 것.
바로 사용 가능

- 뒤로가기 기능 구현할 때도 사용 가능
