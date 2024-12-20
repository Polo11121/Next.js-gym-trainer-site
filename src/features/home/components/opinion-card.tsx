type OpinionCardProps = {
  opinion: string;
  name: string;
  isDarkBackground: boolean;
};

export const OpinionCard = ({
  opinion,
  name,
  isDarkBackground,
}: OpinionCardProps) => (
  <article
    className="flex flex-col items-center text-center"
    aria-labelledby={`${name
      .replace(/\s+/g, "-")
      .toLowerCase()}-opinia-naglowek`}
  >
    <div
      className={`h-fit rounded-[35px] p-[50px] text-[18px] ${
        isDarkBackground ? "text-white bg-primary" : "text-black bg-[#E8E8E8]"
      }`}
    >
      {opinion}
    </div>
    <h3
      id={`${name.replace(/\s+/g, "-").toLowerCase()}-opinia-naglowek`}
      className="font-semibold mt-5 font-oswald text-[24px]"
    >
      {name}
    </h3>
  </article>
);
