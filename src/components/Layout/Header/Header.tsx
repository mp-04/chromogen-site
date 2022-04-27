import React from 'react';
import { Container, Group } from '@mantine/core';
import { Logo } from './Logo/Logo';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import { SourceCode } from './SourceCode/SourceCode';
import useStyles from './Header.styles';

export function Header() {
  const { classes } = useStyles();
  return (
    <div className={classes.header}>
      <Container size="xl" px="md" className={classes.inner}>
        <Logo />
        <Group mr={-8}>
          <SourceCode />
          <ColorSchemeToggle />
        </Group>
      </Container>
    </div>
  );
}
