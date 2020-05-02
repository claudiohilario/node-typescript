import req from "supertest";
import app from "../../src/app";

test("[GET] /demo", async () => {
  const res = await req(app).get("/demo");
  expect(res.body).toEqual({data: [{text: 'demo'}]});
});