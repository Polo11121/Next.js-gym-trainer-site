const ACTIVITIES_LIST = [
  {
    sectionName: "Trening indywidualny",
    activities: [
      { activity: "Pojedynczy trening", price: "100 zł" },
      { activity: "Pakiet 4 treningów", price: "380 zł" },
      { activity: "Pakiet 8 treningów", price: "720 zł" },
      { activity: "Pakiet 12 treningów", price: "1020 zł" },
    ],
  },
  {
    sectionName: "Trening w parze (DUO)",
    activities: [
      { activity: "Pojedynczy trening", price: "160 zł / 80 zł za osobę" },
      { activity: "Pakiet 4 treningów", price: "600 zł / 300 zł za osobę" },
      { activity: "Pakiet 8 treningów", price: "1120 zł / 560 zł za osobę" },
      { activity: "Pakiet 12 treningów", price: "1560 zł / 780 zł za osobę" },
    ],
  },
  {
    sectionName: "Trening grupowy (TRIO)",
    activities: [
      { activity: "Pojedynczy trening", price: "210 zł / 70 zł za osobę" },
    ],
  },
  {
    sectionName: "Współpraca online",
    activities: [
      { activity: "Plan treningowy", price: "160 zł" },
      { activity: "Prowadzenie treningowe (miesiąc)", price: "200 zł/miesiąc" },
    ],
  },
  {
    sectionName: "Współpraca żywieniowa",
    activities: [
      { activity: "Jadłospis MINI", price: "140 zł/miesiąc" },
      { activity: "Jadłospis MAXI", price: "210 zł/miesiąc" },
    ],
  },
  {
    sectionName: "Dodatkowe usługi",
    activities: [
      { activity: "Drenaż limfatyczny", price: "Ustalane indywidualnie" },
      { activity: "Analiza składu ciała", price: "Ustalane indywidualnie" },
    ],
  },
  {
    sectionName: "Bonus",
    activities: [
      {
        activity: "Zniżka -20% na masaże",
        price: "Dla współpracy 3+ miesięcy",
      },
    ],
  },
];

export const ActivityList = () => {
  return (
    <div className="w-full">
      {ACTIVITIES_LIST.map((section) => (
        <div
          key={section.sectionName}
          className="[&:not(:last-child)]:mb-[50px]"
        >
          <h2 className="text-[20px] font-oswald text-primary mb-[30px] font-bold">
            {section.sectionName}
          </h2>
          <ul className="flex flex-col	gap-[20px]">
            {section.activities.map((activity) => (
              <li
                key={activity.activity}
                className="p-[12px] border-b	border-gray-400 border-dashed flex justify-between"
              >
                <p>{activity.activity}</p>
                <span className="font-bold">{activity.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
