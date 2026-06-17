import request from "supertest";

test("GET to /api/v1/status should return 200", async () => {
  // Passa a URL do seu servidor local para o request
  const response = await request("http://localhost:3000").get("/api/v1/status");

  expect(response.status).toBe(200);
});
