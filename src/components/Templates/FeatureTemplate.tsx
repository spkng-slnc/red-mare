import { FC } from "react";
import { Container, Typography } from "@mui/material";

interface TextWithListItems {
  text: string;
  items: string[];
}

type Copy = string | TextWithListItems;

interface FeatureTemplateProps {
  copy: Copy[];
  interaction?: JSX.Element;
  title: string;
  subtitle?: string;
}

export const FeatureTemplate: FC<FeatureTemplateProps> = ({
  copy,
  interaction,
  title,
  subtitle,
}) => {
  return (
    <Container>
      <Typography
        textAlign="end"
        variant="h1"
        letterSpacing={{ md: "0.05em", xs: "unset" }}
        my={{ md: 16, xs: 8 }}
        sx={{ fontSize: { md: "8em", xs: "4em" } }}>
        {title}
      </Typography>
      {Boolean(subtitle) && (
        <Typography variant="h3" my={2} textAlign="end">
          {subtitle}
        </Typography>
      )}
      {copy.map((paragraph, i) => {
        if (typeof paragraph === "string") {
          return (
            <Typography key={`paragraph-${i}`} my={2}>
              {paragraph}
            </Typography>
          );
        }
        return (
          <>
            <Typography key={`paragraph-${i}`} my={2}>
              {paragraph.text}
            </Typography>
            <ul>
              {paragraph.items.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </>
        );
      })}
      {Boolean(interaction) && <>{interaction}</>}
    </Container>
  );
};
