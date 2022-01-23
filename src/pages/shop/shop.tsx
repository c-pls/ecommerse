import { Routes, Route } from "react-router-dom";

import { CollectionPage } from "../collection/collection";
import { CollectionOverview } from "../../components/collections/collection-overview/collection-overview";

export const ShopPage = () => {
  return (
    <Routes>
      <Route path="/" element={<CollectionOverview />} />

      <Route path="/:collectionName" element={<CollectionPage />} />
    </Routes>
  );
};
