import React from 'react';
import Head from 'next/head';
// import { CATEGORIES } from '../../data';
import { Banner } from './Banner/Banner';
import { UserInfoIcons } from './MeetTeam/MeetTeam';
import { HeroImageRight } from './Explore/Explore';
import { MeetTeam } from './MeetTeam/MeetTeamSection';
// import { CategoriesList } from './CategoriesList/CategoriesList';
// import { TestGrid } from './Explore/test';

interface HomePageProps {
  componentsCountByCategory: Record<string, number>;
}

export function HomePage({ componentsCountByCategory }: HomePageProps) {
  const allComponentsCount = Object.keys(componentsCountByCategory).reduce(
    (acc, category) => acc + componentsCountByCategory[category],
    0
  );

//  interface UserInfoIconsProps {
//   avatar: string;
//   name: string;
//   linkedIn: string;
//   gitHub: string;
// }

  return (
    <>
      <Head>
        <title>Chromogen | Testing for Recoil & React Hooks</title>
      </Head>
      <Banner />
      <div id="main">
        {/* <CategoriesList groups={CATEGORIES} componentsCountByCategory={componentsCountByCategory} /> */}
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
