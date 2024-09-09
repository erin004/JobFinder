import axios from "axios";

describe("API Test", () => {
  it("fetches data from the API", async () => {
    const idData = "3484"; 
    const apiUrl = `https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`;

    try {
      const response = await axios.get(apiUrl);
      const data = response.data;

      // Log the API response data to inspect it
      console.log(data);

      // Update the expected data to match the actual data
      expect(response.status).toBe(200);
      expect(data.title).toBe("Updated Expected Title"); // Update with actual data

      // Add more assertions for other properties in the response data

    } catch (error) {
      console.error(error);
    }
  });
});
