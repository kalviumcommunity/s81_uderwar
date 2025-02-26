import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function Underwar() {
  const [stories, setStories] = useState([
    {
      id: 1,
      user: "JohnDoe",
      text: "Tech support asked me to restart my microwave instead of my router...",
      votes: 10,
    },
    {
      id: 2,
      user: "JaneSmith",
      text: "They told me my PC doesn’t have an operating system... while I was using it to chat with them!",
      votes: 25,
    },
  ]);

  const [newStory, setNewStory] = useState("");

  const handleVote = (id, change) => {
    setStories((prev) =>
      prev.map((story) =>
        story.id === id ? { ...story, votes: story.votes + change } : story
      )
    );
  };

  const handleSubmit = () => {
    if (newStory.trim()) {
      setStories([
        ...stories,
        { id: stories.length + 1, user: "Anonymous", text: newStory, votes: 0 },
      ]);
      setNewStory("");
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Underwar: Worst Tech Support Experiences</h1>
      
      <div className="mb-4">
        <Textarea
          value={newStory}
          onChange={(e) => setNewStory(e.target.value)}
          placeholder="Share your worst tech support experience..."
          className="w-full p-2 border rounded"
        />
        <Button onClick={handleSubmit} className="mt-2">Submit Story</Button>
      </div>
      
      {stories.map((story) => (
        <Card key={story.id} className="mb-4 p-4 border rounded shadow">
          <CardContent>
            <p className="font-semibold">{story.user}</p>
            <p className="my-2">{story.text}</p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => handleVote(story.id, 1)}>
                <FaThumbsUp className="mr-1" /> {story.votes}
              </Button>
              <Button variant="ghost" onClick={() => handleVote(story.id, -1)}>
                <FaThumbsDown />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
