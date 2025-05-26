const ACTIVITIES_LIST = [
  {
    sectionName: "Trening indywidualny",
    activities: [
      { activity: "Pojedynczy trening", price: "100 zł" },
      { activity: "Pakiet 4 treningów", price: "380 zł" },
      { activity: "Pakiet 8 treningów", price: "720 zł" },
      { activity: "Pakiet 12 treningów", price: "1020 zł" },
    ],
    additionalInfo: "* Płatność za pakiety wymagana z góry.",
  },
  {
    sectionName: "Trening w parze (DUO)",
    activities: [
      { activity: "Pojedynczy trening", price: "160 zł / 80 zł za osobę" },
      { activity: "Pakiet 4 treningów", price: "600 zł / 300 zł za osobę" },
      { activity: "Pakiet 8 treningów", price: "1120 zł / 560 zł za osobę" },
      { activity: "Pakiet 12 treningów", price: "1560 zł / 780 zł za osobę" },
    ],
    additionalInfo: "* Płatność za pakiety wymagana z góry.",
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
    sectionName: "Promocja!",
    activities: [
      {
        activity:
          "Wybierając plan treningowy i jadlopis razem, otrzymujesz 20% zniżki",
        price: "20% zniżki!",
      },
    ],
    additionalInfo:
      "Skorzystaj z promocji już dziś! Zadbaj o swoje zdrowie i formę w sposób kompleksowy – połącz treningi z indywidualnie dopasowaną dietą, by osiągnąć jeszcze lepsze rezultaty, szybciej i skuteczniej. Wspólnie stworzymy plan, który odpowiada Twoim celom i potrzebom.",
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

export const ActivityList = () => (
  <div className="w-full px-6">
    {ACTIVITIES_LIST.map((section) => (
      <div key={section.sectionName} className="[&:not(:last-child)]:mb-[50px]">
        <h3 className="text-[18px] md:text-[20px] font-oswald text-primary mb-[30px] font-bold">
          {section.sectionName}
        </h3>
        <ul className="flex flex-col gap-[20px]" role="list">
          {section.activities.map((activity) => (
            <li
              key={activity.activity}
              className="p-[12px] border-b border-gray-400 border-dashed flex justify-between"
              role="listitem"
            >
              <span className="text-[14px] md:text-[16px]">
                {activity.activity}
              </span>
              <span
                className="font-bold text-[14px] md:text-[16px] text-center"
                aria-hidden="true"
              >
                {activity.price}
              </span>
            </li>
          ))}
        </ul>
        {section.additionalInfo && (
          <p className="mt-[20px] text-[12px] md:text-[14px] font-semibold text-primary">
            {section.additionalInfo}
          </p>
        )}
      </div>
    ))}
  </div>
);
