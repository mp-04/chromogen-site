import React from 'react';
import { Text, Center } from '@mantine/core';
import { MarkGithubIcon } from '@primer/octicons-react';
import useStyles from './SourceCode.styles';

export function SourceCode({ className, ...others }: React.ComponentProps<'a'>) {
  const { classes, cx } = useStyles();

  return (
    <a
      className={cx(classes.wrapper, className)}
      href="https://github.com/open-source-labs/Chromogen"
      target="_blank"
      rel="noreferrer"
      {...others}
    >
      <Text size="sm">Source code</Text>
      <Center className={classes.icon}>
        <MarkGithubIcon />
      </Center>
    </a>
  );
}
