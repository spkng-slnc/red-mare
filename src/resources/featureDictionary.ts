interface FeatureMetaRecord {
  title: keyof typeof featureDictionary;
  route: string;
}

export const featureDictionary = {
  "About Us": "about-us",
  Appraisals: "appraisals",
  Coaching: "coaching",
  "Sales & Leasing": "sales-and-leasing",
  Training: "training",
};
