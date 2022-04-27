import React from 'react';
import { MarkGithubIcon } from '@primer/octicons-react';
import {
  Title,
  Overlay,
  Group,
  Text,
  Button,
  ThemeIcon,
  SimpleGrid,
  Container,
  useMantineTheme,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import data from './data';
import useStyles from './Banner.styles';

export function Banner() {
  const { classes, cx } = useStyles();
  const [, scrollTo] = useWindowScroll();
  const theme = useMantineTheme();

  const features = data.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon className={classes.featureIcon} size={44}>
        <feature.icon size={20} />
      </ThemeIcon>

      <div className={classes.featureBody}>
        <Text className={classes.featureTitle}>{feature.title}</Text>
        <Text className={classes.featureDescription}>{feature.description}</Text>
      </div>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Container size="xl" px="md">
        <div className={classes.image} />
        <Overlay
          gradient={`linear-gradient(45deg, ${
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
          } 25%, rgba(0, 0, 0, 0) 95%)`}
          opacity={0.5}
          zIndex={1}
        />

        <div className={classes.body}>
          <Text className={classes.supTitle}>Chromogen</Text>
          <Title className={classes.title}>
            <span className={classes.highlight}>UI-driven test generation</span>
            <br /> for Recoil & React Hooks
          </Title>

          <Text className={classes.description}>
          A Jest unit-test generation tool for applications built with Recoil.js
          and React Hooks. Capture your application's state changes during your
          interaction and auto-generate corresponding test suites.
          </Text>

          <Group className={classes.controls}>
            <Button
              className={cx(classes.control, classes.controlMain)}
              onClick={() => scrollTo({ y: 700 })}
            >
              Explore more
            </Button>
            <Button
              className={cx(classes.control, classes.controlSecondary)}
              leftIcon={<MarkGithubIcon />}
              component="a"
              href="https://github.com/oslabs-beta/Chromogen"
              target="_blank"
            >
              GitHub
            </Button>
          </Group>

          <SimpleGrid
            cols={3}
            spacing="xl"
            className={classes.features}
            style={{ marginTop: 100 }}
            breakpoints={[{ maxWidth: 755, cols: 1, spacing: 'lg' }]}
          >
            {features}
          </SimpleGrid>
        </div>
      </Container>
    </div>
  );
}
