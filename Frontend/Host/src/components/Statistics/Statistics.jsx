import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import "./styles.css";

export const Statistics = () => {
  const statsRef = useRef(null);
  const [Donations, setDonations] = useState(0);
  const [Peoples, setPeoples] = useState(0);
  const [Volunteers, setVolunteers] = useState(0);
  const [Countries, setCountries] = useState(0);
  const [startCounting, setStartCounting] = useState(false);
  useEffect(() => {
    if (startCounting) {
      countToTarget(3, setDonations, 2000);
      countToTarget(100, setPeoples, 2000);
      countToTarget(400, setVolunteers, 2000);
      countToTarget(3, setCountries, 2000);
    }
  }, [startCounting]);
  const countToTarget = (target, setState, duration) => {
    const increment = target / (duration / 10); // Update every 10ms
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setState(target);
        clearInterval(interval);
      } else {
        setState(Math.ceil(current));
      }
    }, 10);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Stop observing after triggering
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the stats section is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);
  return (
    <div className="stats" ref={statsRef}>
      <ul>
        <li className="stats-number">ETB {Donations}M</li>
        <li className="stats-text">Donation</li>
      </ul>
      <ul>
        <li className="stats-number">{Volunteers}+</li>
        <li className="stats-text">Volunteer</li>
      </ul>
      <ul>
        <li className="stats-number">{Peoples}+</li>
        <li className="stats-text">Peoples</li>
      </ul>
      <ul>
        <li className="stats-number">{Countries}</li>
        <li className="stats-text">Countries</li>
      </ul>
    </div>
  );
};
