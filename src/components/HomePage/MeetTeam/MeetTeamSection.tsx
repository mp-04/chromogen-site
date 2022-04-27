import React from 'react';
import { Grid, Title } from '@mantine/core';
import { UserInfoIcons } from './MeetTeam';

export function MeetTeam() {
  return (
    <div id="meet-team">
      <br></br>
      <Title>MEET THE TEAM</Title>
      <br></br>
      <Grid>
        <Grid.Col md={6} lg={3}>
        <UserInfoIcons
          avatar="https://avatars.githubusercontent.com/u/68040348?v=4"
          name="Amy Yee"
          linkedIn="linkedin.com/in/amyyee98/"
          gitHub="github.com/amyy98"
        />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <UserInfoIcons
            avatar="https://avatars.githubusercontent.com/u/64433815?v=4"
            name="Andy Wang"
            linkedIn="linkedin.com/in/andy-wang23/"
            gitHub="github.com/andywang23"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <UserInfoIcons
          avatar="https://i.postimg.cc/qMPgQdsz/cam.jpg"
          name="Cameron Greer"
          linkedIn="linkedin.com/in/cameron-greer/"
          gitHub="github.com/cgreer011"
        />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <UserInfoIcons
          avatar="https://i.postimg.cc/HkbnhPz3/connor-rose.jpg"
          name="Connor Rose Delisle"
          linkedIn="linkedin.com/in/connorrosedelisle/"
          gitHub="github.com/connorrose"
        />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <UserInfoIcons
          avatar="https://avatars.githubusercontent.com/u/94757231?v=4"
          name="Dani Almaraz"
          linkedIn="linkedin.com/in/dani-almaraz/"
          gitHub="github.com/dtalmaraz"
        />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <UserInfoIcons
          avatar="https://i.postimg.cc/76tZzvPP/erica.jpg"
          name="Erica Oh"
          linkedIn="linkedin.com/in/ericaysoh/"
          gitHub="github.com/ericaysoh"
        />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <UserInfoIcons
          avatar="https://avatars.githubusercontent.com/u/40308081?v=4"
          name="Jim Chen"
          gitHub="github.com/chenchingk"
        />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <UserInfoIcons
          avatar="https://i.postimg.cc/Zn9KFf08/Jinseon.jpg"
          name="Jinseon Shin"
          linkedIn="linkedin.com/in/jinseonshin/"
          gitHub="github.com/wlstjs"
        />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <UserInfoIcons
          avatar="https://i.postimg.cc/bJwvdYhF/lina.jpg"
          name="Lina Lee"
          linkedIn="linkedin.com/in/lee-lina/"
          gitHub="github.com/lina4lee"
        />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <UserInfoIcons
          avatar="https://i.postimg.cc/nz6GjXXV/mp.jpg"
          name="Marcellies Pettiford"
          linkedIn="linkedin.com/in/marcellies-pettiford/"
          gitHub="github.com/mp-04"
        />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
          <UserInfoIcons
            avatar="https://avatars.githubusercontent.com/u/64747593?v=4"
            name="Michelle Holland"
            linkedIn="linkedin.com/in/michellebholland/"
            gitHub="github.com/michellebholland"
          />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <UserInfoIcons
          avatar="https://avatars.githubusercontent.com/u/59386257?v=4"
          name="Nicholas Shay"
          linkedIn="linkedin.com/in/nicholasjs/"
          gitHub="github.com/nicholasjs"
        />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <UserInfoIcons
          avatar="https://i.postimg.cc/MGDTWMhQ/Ryan.jpg"
          name="Ryan Tumel"
          linkedIn="linkedin.com/in/ryan-tumel/"
          gitHub="github.com/rtumel123"
        />
        </Grid.Col>
        <Grid.Col md={6} lg={3}>
        <UserInfoIcons
          avatar="https://i.postimg.cc/mrRkfN64/sung.jpg"
          name="Sung Kim"
          linkedIn="linkedin.com/in/smk53664/"
          gitHub="github.com/smk53664"
        />
        </Grid.Col>
      </Grid>
    </div>
  )

}