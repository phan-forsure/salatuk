import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Output from "./Output.jsx";

// const date = new Date();
// const day = date.getDate();
const localData = localStorage.getItem("data");

export default function Call() {
  const [city, setCity] = useState("");
  const prayerTimes = useQuery({
    queryKey: ["times"],
    queryFn: () => fetchPrayerTimes(),
    enabled: false,
  });

  const location = useQuery({
    queryKey: ["location"],
    queryFn: () => fetchLocation(),
    enabled: true,
  });

  async function fetchLocation() {
    const data = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client`
    );
    if (data.status !== 200) return;
    return data.json();
  }

  async function fetchPrayerTimes() {
    const date = new Date();
    const data = await fetch(
      `https://api.aladhan.com/v1/calendarByCity/${date.getFullYear()}/${
        date.getMonth() + 1
      }?city=${city}&country=`
    );
    if (data.status !== 200) return;
    return data.json();
  }

  function addToLocal(data) {
    // Add to local storage
    localStorage.setItem("data", JSON.stringify(data));
  }

  useEffect(() => {
    setCity(location.data?.city);
  }, []);

  function handleClick(e) {
    e.preventDefault();
    if (city === "") return;
    addToLocal(prayerTimes);
    prayerTimes.refetch();
  }

  function handleChange(e) {
    setCity(e.target.value);
  }

  return (
    <>
      <section className="input-data comp">
        <form
          className="flex justify-center flex-wrap content-center items-center"
          name="city"
          id="cityform"
        >
          <input
            type="text"
            onChange={handleChange}
            placeholder="المدينة"
            defaultValue={location.data?.city}
          />
          <input
            className="w-full bg-neutral-600 rounded hover:bg-neutral-500 transition-all my-2 cursor-pointer"
            type="submit"
            value="ابحث"
            onClick={handleClick}
          />
        </form>
      </section>
      <Output info={prayerTimes} />
    </>
  );
}
