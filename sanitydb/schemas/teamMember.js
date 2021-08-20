/* eslint-disable import/no-anonymous-default-export */
import { array } from "prop-types";

export default {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
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
      name: "bio",
      title: "Bio",
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
      name: "social",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "twitter", type: "url", title: "Twitter" },
        { name: "linkedIn", type: "url", title: "LinkedIn" },
        { name: "gitHub", type: "url", title: "GitHub" },
        { name: "portfolio", type: "url", title: "Portfolio" },
      ],
    },
    {
      name: "quote",
      title: "Quote",
      type: "text",
    },
  ],
};
