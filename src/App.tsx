import { Button } from "./components/Button";
import { addStories, useStories } from "./hooks/useStories";
import { ChangeEvent, useState } from "react";

const Stories: React.FC = () => {
  const [stories, refetch] = useStories();
  const [text, setText] = useState("");

  // get the max priority from the stories
  if (stories === undefined) return <>Loading</>;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add a todo"
      />
      <Button
        onClick={async () => {
          const priority = (stories?.[0]?.priority ?? 0) + 1; // + 1
          await addStories(text, priority); // after submitting the form, the text input should be cleared
          refetch();
          setText("");
        }}
      >
        Add
      </Button>

      {stories.map((story) => (
        <p className="border py-3" key={story.id}>
          [{story.priority}] {story.text} <Button>Up</Button>{" "}
          <Button>Down</Button>
        </p>
      ))}
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <div className="container mx-auto mt-4 text-center">
      <div className="space-y-2">
        <Stories />
      </div>
    </div>
  );
};
