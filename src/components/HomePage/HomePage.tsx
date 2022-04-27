import React from 'react';
import Head from 'next/head';
import { Banner } from './Banner/Banner';
import { HeroImageRight } from './Explore/Explore';
import { MeetTeam } from './MeetTeam/MeetTeamSection';

interface HomePageProps {
  componentsCountByCategory: Record<string, number>;
}

export function HomePage() {

  return (
    <>
      <Head>
        <title>Chromogen | Testing for Recoil & React Hooks</title>
      </Head>
      <Banner />
      <div id="main">
      </div>
      <div id="explore">
        <HeroImageRight />
      </div>
      <div id="people">
        <MeetTeam />
      </div>
    </>
  );
}
