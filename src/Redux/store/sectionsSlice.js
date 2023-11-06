import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      title: "intro This blog post shows a few.",
      _id: "into1",
      parent_section_id: null,
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "chp1 This blog post shows a few.",
      _id: "chp1",
      parent_section_id: null,
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "chp2 This blog post shows a few.",
      _id: "chp2",
      parent_section_id: null,
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "topic1 This blog post shows a few.",
      _id: "t1",
      parent_section_id: "chp1",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "topic2 This blog post shows a few.",
      _id: "t2",
      parent_section_id: "chp1",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "topic3 This blog post shows a few.",
      _id: "t3",
      parent_section_id: "chp1",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "topic4 This blog post shows a few.",
      _id: "t4",
      parent_section_id: "chp2",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "ex1 This blog post shows a few.",
      _id: "e1",
      parent_section_id: "t1",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "solution This blog post shows a few.",
      _id: "sol1",
      parent_section_id: "e1",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "steps This blog post shows a few.",
      _id: "stp1",
      parent_section_id: "e1",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
  ],
};

const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    fetchSections(state, action) {
      state.list = action.payload;
    },
    addSection(state, action) {
      state.list.push(action.payload);
    },
    updateSection(state, action) {
      const index = state.list.findIndex(
        (section) => section._id === action.payload._id
      );
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteSection(state, action) {
      state.list = state.list.filter(
        (section) => section._id !== action.payload
      );
    },
  },
});

export const { fetchSections, addSection, updateSection, deleteSection } =
  sectionsSlice.actions;

export default sectionsSlice.reducer;
