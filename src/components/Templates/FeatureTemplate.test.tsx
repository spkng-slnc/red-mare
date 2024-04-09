import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { FeatureTemplate } from "./FeatureTemplate";

describe("FeatureTemplate", () => {
  const title = "Test Title";
  const content1 = ["This is one paragraph.", "This is two paragraphs."];

  test("displays copy as expected", () => {
    render(<FeatureTemplate copy={content1} title={title} />);
  });
});
