import Head from "next/head";
import { Navbar } from "../components/navbar";

import Logo from "../img/logo.png";
import VraiLogo from "..//img/logo-original.jpg";
import Image from "next/image";

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { endOfDay } from "date-fns";

// const messages = {
//   allDay: "journée",
//   previous: "précédent",
//   next: "suivant",
//   today: "aujourd'hui",
//   month: "mois",
//   week: "semaine",
//   day: "jour",
//   agenda: "Agenda",
//   date: "date",
//   time: "heure",
//   event: "événement", // Or anything you want
//   showMore: (total) => `+ ${total} événement(s) supplémentaire(s)`,
// };

const messages = {
  allDay: "journée",
  Monday: "lundi",
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

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Format1",
    start: new Date(2022, 7, 0),
    end: new Date(2022, 6, 0),
  },
];

function CalendrierPage() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="">
        <Calendar
          messages={messages}
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />
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
