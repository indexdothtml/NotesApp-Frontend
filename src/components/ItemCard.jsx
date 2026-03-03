import { Card, CardContent, CardActionArea, Divider } from "@mui/material";

import formatDate from "../utils/dateFormatter.js";

function ItemCard({ item, child }) {
  // child contains content inside ItemCard, which can be "Chapters" or "Pages"

  return (
    <Card>
      <CardActionArea>
        <CardContent className="flex flex-col">
          <span className="font-semibold truncate">{item?.name}</span>
          <div className="flex flex-col gap-2">
            <span className="text-xs opacity-50">{child}: 10</span>
            <Divider />
            <div className="flex gap-2">
              <span className="text-xs opacity-50">
                Created on: {formatDate(item?.createdAt)}
              </span>
              <span className="text-xs opacity-50">
                Updated on: {formatDate(item?.updatedAt)}
              </span>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemCard;
