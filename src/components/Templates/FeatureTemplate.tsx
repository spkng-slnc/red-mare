import { FC } from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";

export interface TextWithListItems {
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
  const theme = useTheme();

  return (
    <Container>
      <Typography
        textAlign="end"
        variant="h1"
        letterSpacing={{ md: "0.05em", xs: "unset" }}
        mt={{ md: 16, xs: 8 }}
        sx={{ fontSize: { md: "6em", xs: "4em" } }}>
        {title}
      </Typography>
      {Boolean(subtitle) && (
        <Typography
          color={theme.palette.secondary.main}
          fontWeight={300}
          textAlign="end"
          sx={{ fontSize: { md: "3em", xs: "2em" } }}
          variant="h3">
          {subtitle}
        </Typography>
      )}
      <Box mt={{ md: 16, xs: 8 }}>
        {copy.map((paragraph, i) => {
          if (typeof paragraph === "string") {
            return (
              <Typography key={`p${i}`} my={2}>
                {paragraph}
              </Typography>
            );
          }
          return (
            <>
              <Typography key={`p${i}`} my={2}>
                {paragraph.text}
              </Typography>
              <ul>
                {paragraph.items.map((item, j) => {
                  return <li key={`p${i}-i${j}`}>{item}</li>;
                })}
              </ul>
            </>
          );
        })}
      </Box>
      {Boolean(interaction) && <>{interaction}</>}
    </Container>
  );
};
