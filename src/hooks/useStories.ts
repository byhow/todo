import { createClient } from "../graphql/generated";
import { useEffect, useState } from "react";
import { AsyncReturnType } from "type-fest";

const client = createClient({
  url: import.meta.env["VITE_GRAPHQL_URL"],
});

async function getStories() {
  const stories = await client.query({
    stories: { id: true, priority: true, text: true },
  });

  return stories.stories.sort((a, b) => b.priority - a.priority);
}

export function addStories(input: string, priority: number) {
  return client.mutation({
    createStory: { __args: { input: { text: input, priority } }, id: true },
  });
}

type Stories = AsyncReturnType<typeof getStories>;

export function useStories() {
  const [stories, setStories] = useState<Stories>();
  const refetch = () => getStories().then(setStories)

  useEffect(() => {
    refetch()
  }, []);

  return [stories, refetch] as const;
}
