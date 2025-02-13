import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import { Partner } from '../../components/Partner/Partner';
import { About } from '../../components/About/About';
import { Donate } from '../../components/Donate/Donate';
import { Videos } from '../../components/Video/Videos';
import { Features } from '../../components/Features/Features';
import { Statistics } from '../../components/Statistics/Statistics';
import { Footer } from '../../components/Footer/Footer';
import { Trademark } from '../../components/Trademark/Trademark';
import "./styles.css";

export const Home = () => {
  return (
    <>
       <Hero />
       {/* <Partner /> */}
       <About />
       <Donate />
       <Videos />
       <Features />
       <Statistics />
    </>
  )
};
