import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { FeatureTemplate } from "./FeatureTemplate";

describe("FeatureTemplate", () => {
  const title = "Test Title";
  const subtitle = "Test subtitle";
  const copy = ["This is one paragraph.", "This is two paragraphs."];
  const list = {
    items: ["First item", "Second item", "Third item"],
    text: "This is a paragraph with list items.",
  };

  it("displays title and copy", () => {
    render(<FeatureTemplate copy={copy} title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();

    copy.forEach((p) => {
      expect(screen.getByText(p)).toBeInTheDocument();
    });
  });

  it("displays subtitle", () => {
    render(<FeatureTemplate copy={copy} title={title} subtitle={subtitle} />);

    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  it("displays copy with associated list items", () => {
    render(<FeatureTemplate copy={[...copy, list]} title={title} />);

    screen.debug();
    expect(screen.getByText(list.text)).toBeInTheDocument();

    list.items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });
});
