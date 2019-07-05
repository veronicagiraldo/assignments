const ThemeProvider = require("../ThemeProvider");
const mockAxios = require("axios")
const authAxios = axios.create({
  baseURL: baseURL,
  headers: {'x-api-key': token}
});

test("fetches results from api call", () => {
  mockAxios.get.mockImplementationOnce(() =>
  Promise.resolve(dummy_response_data_here)
);
return ThemeProvider.getData().then(response => {
    expect(response).toEqual("");
  });
});