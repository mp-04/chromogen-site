import React from 'react';
import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import { BrandLinkedin, BrandGithub } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        chromogen &#169; 2022
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <a
              href="https://www.linkedin.com/company/chromogen/"
              target="_blank"
              rel="noreferrer"
            >
            <BrandLinkedin size={18} />
            </a>
          </ActionIcon>
          <ActionIcon size="lg">
            <a
              href="https://github.com/open-source-labs/Chromogen"
              target="_blank"
              rel="noreferrer"
            >
            <BrandGithub size={18} />
            </a>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
