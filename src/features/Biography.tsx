import {
  FeatureTemplate,
  TextWithListItems,
} from "../components/Templates/FeatureTemplate";

const COPY: TextWithListItems = {
  items: [
    "Purchasing or leasing a new horse",
    "Answering questions about management and upkeep of your horse",
    "Troubleshooting behavior or medical issues",
    "Connecting you to veterinarians, chiropractors, farriers, acupuncturists, and other professionals in the area that best suit your needs",
  ],
  text: "Sarah offers expert consulting for a variety of equine related needs and concerns. With over 30 years of expertise in the industry and access to a network of reputable professionals in the community, she can assist in the following areas:",
};

export const Biography = () => {
  return (
    <FeatureTemplate
      copy={[COPY]}
      title="Sarah Bhayani"
      subtitle="Owner, Trainer, Instructor"
    />
  );
};
