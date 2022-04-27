import React from 'react';
import { createStyles, Avatar, Text, Group } from '@mantine/core';
import { BrandGithub, BrandLinkedin } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  icon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },

  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

interface UserInfoIconsProps {
  avatar: string;
  name: string;
  linkedIn?: string;
  gitHub: string;
}

export function UserInfoIcons({ avatar, name, linkedIn, gitHub }: UserInfoIconsProps) {
  const { classes } = useStyles();
  return (
    <div>
      <Group noWrap>
        <Avatar src={avatar} size={94} radius="md" />
        <div>

          <Text size="lg" weight={500} className={classes.name}>
            {name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <BrandGithub size={16} className={classes.icon} />
            <Text<'a'> component="a" size="xs" color="dimmed" href={gitHub} target="_blank">
              {gitHub}
              {/* {email} */}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            {/* <PhoneCall size={16} className={classes.icon} /> */}
            <BrandLinkedin size={16} className={classes.icon}/>
            <Text<'a'> component="a" size="xs" color="dimmed" href={linkedIn} target="_blank">
              {linkedIn}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  );
}
