import React from "react";

const date = new Date();
const day = date.getDate();
export default function Output({ info }) {
  if (info.isFetching) {
    return (
      <section className="output-data comp flex justify-center items-center">
        <span className="animate-spin block rounded-full size-12 p-4 bg-transparent border-4 border-stone-300 border-r-slate-700 border-solid"></span>
      </section>
    );
  }

  if (info.isError) {
    return (
      <section className="output-data comp flex justify-center items-center">
        <p className="!justify-center">لا توجد مدينه بهذا الاسم</p>
      </section>
    );
  }

  return (
    <section className="output-data comp flex justify-center items-start overflow-y-scroll">
      <div className="data w-full">
        {info.data ? (
          <>
            <p>
              Fajr <span>{info.data?.data[day].timings.Fajr}</span>
            </p>
            <p>
              Sunrise <span>{info.data?.data[day].timings.Sunrise}</span>
            </p>
            <p>
              Dhuhr <span>{info.data?.data[day].timings.Dhuhr}</span>
            </p>
            <p>
              Asr <span>{info.data?.data[day].timings.Asr}</span>
            </p>
            <p>
              Maghrib <span>{info.data?.data[day].timings.Maghrib}</span>
            </p>
            <p>
              Ishaa <span>{info.data?.data[day].timings.Isha}</span>
            </p>
            <span className="w-full block pt-4 text-center">
              Timezone: {info.data?.data[day].meta.timezone}
            </span>
          </>
        ) : (
          <p className="!justify-center">لا بيانات</p>
        )}
      </div>
    </section>
  );
}
