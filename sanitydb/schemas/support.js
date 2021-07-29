export default {
    name: "support",
    title: "Support",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
      },
      {
        name: "url",
        title: "Url",
        type: "url",
      },
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "category",
        title: "Category",
        type: "string",
        options: {
          list: [
            { title: "all", value: "all"},
            { title: "education", value: "education"},
            { title: "safety", value: "safety"},
            { title: "financial", value: "financial"},
            { title: "legal", value: "legal"},
            { title: "volunteer", value: "volunteer"},
            { title: "health", value: "health"},
            { title: "art", value: "art"}
          ]
        }
      },
      {
        name: "allyship",
        title: "Allyship",
        type: "string",
        options: {
          list: [
            { title: "all", value: "all"},
            { title: "asian", value: "asian"},
            { title: "bipoc", value: "bipoc"},
            { title: "white", value: "white"},
          ]
        }
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
    ],
  };