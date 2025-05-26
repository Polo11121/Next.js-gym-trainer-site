import { NavigationButton } from "@/components/navigation-button";
import { cn } from "@/utils/cn";

type InfoSectionProps = {
  title: string;
  description: string;
  listSections: { title: string; items: string[] }[];
  additionalInfo?: string;
  isGrayBg?: boolean;
  rightPanelContent?: { title: string; items: string[]; footer?: string }[];
};

export const InfoSection = ({
  title,
  description,
  listSections,
  additionalInfo,
  isGrayBg,
  rightPanelContent = [],
}: InfoSectionProps) => {
  const sectionId = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className={cn(isGrayBg && "bg-tertiaryGray")}>
      <article
        className="container px-6 lg:px-0  mx-auto flex flex-col lg:flex-row  my-[35px] lg:my-[70px] gap-[40px]"
        id={sectionId}
        role="region"
      >
        <div className="flex-1">
          <h2
            id={`${sectionId}-heading`}
            className="text-[30px] lg:text-[40px] font-bold font-oswald flex flex-col mb-[40px] text-primary"
          >
            {title}
          </h2>
          <div className="flex flex-col gap-[20px] text-[15px]">
            <p>{description}</p>
            {listSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold mb-[10px]">{section.title}</h3>
                <ul className="list-disc pl-[20px] marker:text-primary flex flex-col gap-[10px]">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            {additionalInfo && (
              <p className="font-semibold">{additionalInfo}</p>
            )}
          </div>
        </div>
        {rightPanelContent.length > 0 && (
          <div
            className="flex-1 flex flex-col gap-[20px] bg-primary p-6 lg:p-[60px] text-white text-[15px]"
            role="complementary"
          >
            <h2 id={`${sectionId}-right-panel`} className="sr-only">
              Dodatkowe informacje dla sekcji {title}
            </h2>
            {rightPanelContent.map((panel, index) => (
              <div key={index} className="flex flex-col gap-[10px]">
                <h3 className="font-bold">{panel.title}</h3>
                <ul className="list-disc pl-[20px] marker:text-white flex flex-col gap-[10px]">
                  {panel.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {panel.footer && <p className="font-bold">{panel.footer}</p>}
              </div>
            ))}
            <NavigationButton
              ariaLabel={`Przejdź do kontaktu - Skontaktuj się ze mną już dziś`}
              href="/kontakt"
              variant="tertiary"
              className="mx-auto border-white border-1 lg:text-[16px] text-[15px]"
            >
              Skontaktuj się ze mną już dziś!
            </NavigationButton>
          </div>
        )}
      </article>
    </div>
  );
};
