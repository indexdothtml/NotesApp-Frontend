import { Card, CardContent, CardActionArea, Divider } from "@mui/material";

import formatDate from "../utils/dateFormatter.ts";

type ISODateString = string;

interface CardData {
  heading: string;
  childrenCount?: number;
  pagePreview?: string;
  createdAt: ISODateString;
  updatedAt: ISODateString;
}

type ShowDataFor = "page" | "chapter" | "book";

interface DataCardProps {
  data: CardData;
  showDataFor: ShowDataFor;
}

function DataCard({ data, showDataFor }: DataCardProps) {
  // showDataFor possible values can be "page" for page data, "chapter" for chapter data and "book" for book data.

  return (
    <Card>
      <CardActionArea>
        <CardContent className="flex flex-col">
          <span className="font-semibold truncate">
            {showDataFor !== "page" ? "Name: " : "Page Number: "}
            {data.heading}
          </span>
          <div className="flex flex-col gap-2">
            {showDataFor !== "page" ? (
              <span className="text-xs opacity-50">
                {showDataFor === "book" ? "Chapters" : "Pages"}:{" "}
                {data?.childrenCount || 0}
              </span>
            ) : (
              <span className="text-xs opacity-50">
                Preview:
                {data?.pagePreview || "Not available"}
              </span>
            )}
            <Divider />
            <div className="flex gap-2">
              <span className="text-xs opacity-50">
                Created on: {formatDate(data.createdAt)}
              </span>
              <span className="text-xs opacity-50">
                Updated on: {formatDate(data.updatedAt)}
              </span>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default DataCard;
