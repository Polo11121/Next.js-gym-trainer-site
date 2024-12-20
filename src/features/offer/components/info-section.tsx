import { NavigationButton } from "@/components/navigation-button";
import { cn } from "@/utils/cn";

type InfoSectionProps = {
  title: string;
  description: string;
  listSections: { title: string; items: string[] }[];
  additionalInfo?: string;
  isGrayBg?: boolean;
  rightPanelContent?: { title: string; items: string[]; footer?: string };
};

export const InfoSection = ({
  title,
  description,
  listSections,
  additionalInfo,
  isGrayBg,
  rightPanelContent,
}: InfoSectionProps) => (
  <div className={cn(isGrayBg && "bg-tertiaryGray")}>
    <article className="container px-32 mx-auto flex my-[70px] gap-[40px]">
      <div className="flex-1">
        <h2 className="text-[40px] font-bold font-oswald flex flex-col mb-[40px] text-primary">
          {title}
        </h2>
        <div className="flex flex-col gap-[20px]">
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
          {additionalInfo && <p>{additionalInfo}</p>}
        </div>
      </div>
      {rightPanelContent && (
        <div className="flex-1 flex flex-col gap-[20px] bg-primary p-[60px] text-white text-[20px]">
          <h3 className="font-bold">{rightPanelContent.title}</h3>
          <ul className="list-disc pl-[20px] marker:text-white flex flex-col gap-[10px]">
            {rightPanelContent.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          {rightPanelContent.footer && (
            <p className="font-bold">{rightPanelContent.footer}</p>
          )}
          <NavigationButton
            ariaLabel="Skontaktuj się ze mną już dziś!"
            href="test"
            variant="tertiary"
            className="mx-auto border-white border-1"
          >
            Skontaktuj się ze mną już dziś!
          </NavigationButton>
        </div>
      )}
    </article>
  </div>
);
