import { array } from "prop-types";

export default {
  name: "wins",
  title: "Wins",
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
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["art", "heritage", "representation", "contributions", "cultural"],
      },
    },
    {
      name: "field",
      title: "Field",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
  ],
};
