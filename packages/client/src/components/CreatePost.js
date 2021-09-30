import { useState } from "react";
import ButtonDiv from "./styled/ButtonDiv";
import Button from "./styled/Button";
import InputDiv from "./styled/InputDiv";
import Input from "./styled/Input";
import InputLabel from "./styled/InputLabel";
import TextArea from "./styled/TextArea";
import Checkbox from "./styled/Checkbox";
import Form from "./styled/Form";
import FormHeader from "./styled/FormHeader";

// Data looks like this (for backend)
// console.log({
//     title:'string',
//     body:'string',
//     isDraft:boolean
// })

const backend = process.env.REACT_APP_BACKEND;
const endpoint = `${backend}/api/post/create-post`;

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isDraft, setIsDraft] = useState(true);

  const handleSubmit = async (e) => {
    // we might want to go to the next page to see the published post (have to verify this)
    e.preventDefault();
    // Question: Do we need form validation here for Leon?
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          body,
          isDraft,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form padding="2rem 18% 5rem" onSubmit={handleSubmit}>
      <FormHeader>
        <h2>Add a New Post</h2>
      </FormHeader>
      {/* Title Section */}
      <InputDiv>
        <InputLabel htmlFor="title">Title</InputLabel>
        <Input
          name="title"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </InputDiv>

      {/* Body Text Section */}
      <InputDiv>
        <InputLabel htmlFor="body">Body of Post</InputLabel>
        <TextArea
          name="body"
          placeholder="Body Info"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </InputDiv>

      {/* Publish and Submit Section */}
      <InputDiv flexDirection="row" justify="center" align="center">
        <Checkbox
          name="isDraft"
          checked={isDraft}
          value={isDraft}
          onChange={(e) => setIsDraft(e.currentTarget.checked)}
        />
        <span>Draft?</span>
      </InputDiv>

      {/* Change button element to component once avail. */}
      <ButtonDiv>
        <Button fontSize="1.5rem" size="11rem">
          Submit
        </Button>
        <Button fontSize="1.5rem" size="11rem">
          Cancel
        </Button>
      </ButtonDiv>
    </Form>
  );
};
export default CreatePost;
