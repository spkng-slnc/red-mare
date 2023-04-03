import { Box, Container, Typography } from "@mui/material";
import { FC } from "react";

interface FeatureTemplateProps {
  copy: string[];
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
        variant="h1"
        my={12}
        textAlign="end"
        color={(theme) => theme.palette.secondary.main}
      >
        {title}
      </Typography>
      {Boolean(subtitle) && (
        <Typography
          variant="h3"
          my={2}
          textAlign="end"
          color={(theme) => theme.palette.secondary.main}
        >
          {subtitle}
        </Typography>
      )}
      {copy.map((paragraph) => (
        <Typography my={2}>{paragraph}</Typography>
      ))}
      {Boolean(interaction) && <>{interaction}</>}
    </Container>
  );
};
