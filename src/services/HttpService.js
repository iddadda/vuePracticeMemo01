import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/api";

class HttpService {
  // 메모 리스트

  // 메모 추가
  async save(jsonBody) {
    const res = await axios.post("/memo", jsonBody);
    return res.data;
  }
}

export default new HttpService();
