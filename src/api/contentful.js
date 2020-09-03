import { createClient } from "contentful";

const client = createClient({
  space: "fe6mrnbl80h6",
  accessToken: "TCmAoX_Uw8WH8Cl3Lbaaz747F2nobvu_hoCQGogSuZw",
});

class ContentfulClient {
  async getProducts() {
    try {
      let contentful = await client.getEntries({
        content_type: "photography",
      });

      let products = contentful.items;
      products = products.map((item) => {
        const { title, price, description } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, description, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ContentfulClient;
