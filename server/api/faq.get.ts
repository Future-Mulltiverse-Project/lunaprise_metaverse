import axios from "axios";

export default cachedEventHandler(
  async (event) => {
    const config = useRuntimeConfig();

    try {
      const response = await axios.get(
        `${config.baseURL}/faqs`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${config.apiToken}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      console.error("Error fetching FAQs:", error.message);
      throw createError({
        statusCode: error.response?.status || 500,
        statusMessage: "Failed to fetch FAQs",
      });
    }
  },
  {
    maxAge: 60 * 10,
    getKey: () => "faq-cache",
  }
);
