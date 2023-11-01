import React, { useCallback, useMemo, useState } from "react";
import Design from "./design";
import { useParams } from "react-router-dom";

function Book() {
  const { id } = useParams();
  console.log(id, "Params book ID");
  const DummyData = [
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
      title: "topic5 This blog post shows a few.",
      _id: "t5",
      parent_section_id: "chp2",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "topic6 This blog post shows a few.",
      _id: "t6",
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
      title: "ex2 This blog post shows a few.",
      _id: "e2",
      parent_section_id: "t1",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "ex3 This blog post shows a few.",
      _id: "e3",
      parent_section_id: "t1",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "ex4 This blog post shows a few.",
      _id: "e4",
      parent_section_id: "t1",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "ex5 This blog post shows a few.",
      _id: "e5",
      parent_section_id: "t2",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "ex6 This blog post shows a few.",
      _id: "e6",
      parent_section_id: "t2",
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
    {
      title: "solution This blog post shows a few.",
      _id: "sol2",
      parent_section_id: "e2",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "steps This blog post shows a few.",
      _id: "stp2",
      parent_section_id: "e2",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "solution This blog post shows a few.",
      _id: "sol3",
      parent_section_id: "e3",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
    {
      title: "steps This blog post shows a few.",
      _id: "stp3",
      parent_section_id: "e3",
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    },
  ];
  const [sections, setSections] = useState(DummyData);

  const filterSections = useMemo(
    () => sections.filter((section) => section.parent_section_id === null),
    [sections]
  );

  const addMainSection = useCallback(() => {
    const id = Math.round(Math.random() * 100).toString();
    const payload = {
      title: "TEST",
      _id: id,
      parent_section_id: null,
      book_id: "Bio1",
      content:
        "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
    };
    setSections((prevSection) => [...prevSection, payload]);
  }, [setSections]);

  const addSubSection = useCallback(
    (section) => {
      const id = Math.round(Math.random() * 100).toString();
      const payload = {
        title: "TEST",
        _id: id,
        parent_section_id: section._id,
        book_id: "Bio1",
        content:
          "Description / Content This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.",
      };
      setSections((prevSection) => [...prevSection, payload]);
    },
    [setSections]
  );

  const deleteSection = useCallback(
    (id) => {
      setSections((prevSection) => prevSection.filter((sec) => sec._id !== id));
    },
    [setSections]
  );

  const updateSection = useCallback(
    (section) => {
      const payload = {
        title: "UPDATED",
        _id: section._id,
        parent_section_id: section.parent_section_id,
        book_id: "Bio1",
        content: "Description Updated / Content Updated",
      };
      setSections((prevSection) =>
        prevSection.map((sec) => (sec._id === section._id ? payload : sec))
      );
    },
    [setSections]
  );

  return (
    <Design
      filterSections={filterSections}
      sections={sections}
      addMainSection={addMainSection}
      deleteSection={deleteSection}
      updateSection={updateSection}
      addSubSection={addSubSection}
    />
  );
}

export default Book;
