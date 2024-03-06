//  CS2/CS:GO Pricing JS SDK

export default class Deagle {
  BASE_URL;

  constructor() {
    this.BASE_URL = "https://api.deagle.top/";
  }

  async fetchPrices() {
    try {
      const response = await fetch(this.BASE_URL + "csgo.json");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  async fetchImages() {
    try {
      const response = await fetch(this.BASE_URL + "csgo_images.json");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
}
