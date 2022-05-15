import Head from "next/head";
import { Navbar } from "../components/navbar";

import Logo from "../img/logo.png";
import VraiLogo from "../img/logo-original.jpg";
import Image from "next/image";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";

import moment from "moment";
require("moment/locale/fr.js");
const localizer = momentLocalizer(moment);

const messages = {
  allDay: "journée",
  previous: "précédent",
  next: "suivant",
  today: "aujourd'hui",
  month: "mois",
  week: "semaine",
  day: "jour",
  agenda: "Agenda",
  date: "date",
  time: "heure",
  event: "événement", // Or anything you want
  showMore: (total) => `+ ${total} événement(s) supplémentaire(s)`,
};

const locales = {
  fr: require("date-fns/locale/fr"),
};

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// ----------POUR LES MOIS cest -1 le chiffre ex: juin = 5 au lieu de 6------------
// Les differents types d events
// COUPE DES CLUBS X2
// SIMULTANE LR
// RÉGULARITÉ

const events = [
  {
    title: "COUPE DES CLUBS X2",
    start: new Date(2022, 4, 2),
    end: new Date(2022, 4, 2),
    hexColor: "F08080",
  },
  {
    title: "SIMULTANE LR",
    start: new Date(2022, 4, 4),
    end: new Date(2022, 4, 4),
    hexColor: "EE82EE",
  },
  {
    title: "RÉGULARITÉ",
    start: new Date(2022, 4, 6),
    end: new Date(2022, 4, 6),
    hexColor: "00FF00",
  },
  {
    title: "SIMULTANE LR",
    start: new Date(2022, 4, 9),
    end: new Date(2022, 4, 9),
    hexColor: "EE82EE",
  },

  {
    title: "RÉGULARITÉ",
    start: new Date(2022, 4, 11),
    end: new Date(2022, 4, 11),
    hexColor: "00FF00",
  },
  {
    title: "COUPE DES CLUBS X2",
    start: new Date(2022, 4, 13),
    end: new Date(2022, 4, 13),
    hexColor: "F08080",
  },
  {
    title: "SIMULTANE LR",
    start: new Date(2022, 4, 16),
    end: new Date(2022, 4, 16),
    hexColor: "EE82EE",
  },
  {
    title: "RÉGULARITÉ",
    start: new Date(2022, 4, 18),
    end: new Date(2022, 4, 18),
    hexColor: "00FF00",
  },
  {
    title: "RÉGULARITÉ",
    start: new Date(2022, 4, 20),
    end: new Date(2022, 4, 20),
    hexColor: "00FF00",
  },
  {
    title: "RÉGULARITÉ",
    start: new Date(2022, 4, 23),
    end: new Date(2022, 4, 23),
    hexColor: "00FF00",
  },
  {
    title: "RÉGULARITÉ",
    start: new Date(2022, 4, 25),
    end: new Date(2022, 4, 25),
    hexColor: "00FF00",
  },
  {
    title: "RÉGULARITÉ",
    start: new Date(2022, 4, 27),
    end: new Date(2022, 4, 27),
    hexColor: "00FF00",
  },
];

function eventStyleGetter(events, start, end, isSelected) {
  var backgroundColor = "#" + events.hexColor;
  var style = {
    backgroundColor: backgroundColor,
    borderRadius: "0px",
    opacity: 1,
    color: "black",
    border: "0px",
    display: "block",
    font: 400,
  };
  return {
    style: style,
  };
}

function CalendrierPage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar />
      <div className="grid grid-cols-5">
        <div></div>
        <div className="col-span-3">
          <Calendar
            messages={messages}
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: "50px" }}
            eventPropGetter={eventStyleGetter}
          />
        </div>
      </div>
      <footer className="grid grid-cols-3 gap-1 place-items-stretch  bg-zinc-900">
        <div className="ml-6 my-12">
          <span className="text-2xl text-white font-small">
            BRIDGE CLUB DU CERCLE DU COMMERCE 2022
          </span>
        </div>
        <div className="relative left-20 w-60 ml-10 py-10">
          <Image
            src={VraiLogo}
            className=""
            alt="Logo"
            width={250}
            height={120}
          />
        </div>

        <div className="relative left-60 w-60">
          <Image src={Logo} className="" alt="Logo" width={190} height={190} />
        </div>
      </footer>
    </div>
  );
}

export default CalendrierPage;
