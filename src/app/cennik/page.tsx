import { Contact } from "@/components/contact";
import { ActivityList } from "@/features/pricing/activity-list";

export const PricingPage = () => {
  return (
    <main className="pt-[200px] ">
      <header className="bg-tertiaryGray p-[70px] text-center">
        <h1 className="text-primary text-[50px] font-bold font-oswald mb-[10px]">
          CENNIK
        </h1>
      </header>
      <section
        className="mt-[70px] flex container px-32 mx-auto flex-col"
        aria-labelledby="kontakt-naglowek"
      >
        <ActivityList />
        <Contact showContactForm={false} />
      </section>
    </main>
  );
};

export default PricingPage;
