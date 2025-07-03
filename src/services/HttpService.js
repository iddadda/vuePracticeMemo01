import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080/api";

class HttpService {
  // 메모 리스트
  async findAll(params) {
    const res = await axios.get("/memo", { params });
    return res.data;
  }

  // 메모 추가
  async save(jsonBody) {
    const res = await axios.post("/memo", jsonBody);
    return res.data;
  }

  // 메모 상세 페이지
  async findById(id) {
    const res = await axios.get(`/memo/${id}`);
    return res.data;
  }

  // 메모 수정
  async modify(jsonBody) {
    const res = await axios.put("/memo", jsonBody);
    return res.data;
  }

  // 메모 삭제
  async deleteById(params) {
    const res = await axios.delete("/memo", { params });
    return res.data;
  }
  // async deleteById(id) {
  //   const res = await axios.delete(`/memo?id=${id}`);
  //   return res.data;
  // }
}

export default new HttpService();
