const { createApp } = Vue;

const get = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

createApp({
  data: () => ({
      dictionary: []
  }),
  async mounted() {
    const data = await get("../contents/dictionary.json");
    this.dictionary = data;
  },
}).mount("#app");
