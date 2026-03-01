import { useParams } from "react-router";

function ChapterPage() {
  const { chapterId } = useParams();

  return <div>Chapter: {chapterId}</div>;
}

export default ChapterPage;
