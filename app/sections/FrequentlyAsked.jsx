import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FrequentlyAsked = () => {
  return (
    <div className=" bg-[#16191c] text-white mt-20">
      <div className="p-14 py-20">
        <p className=" text-[2.6rem] font-medium leading-[1.29] tracking-[-0.5px] text-center text-white">
          Frequently Asked Questions
        </p>
        <div className=" mt-10">
          {/* {faqs.map((faq, index) => (
          <Accordion key={index} question={faq.question} answer={faq.answer} />
        ))} */}

          <Accordion type="single" collapsible className="w-full">

            <AccordionItem value="item-1">
              <AccordionTrigger className=" font-semibold text-lg">How can I participate?</AccordionTrigger>
              <AccordionContent>
              To join, click the "Become an Affiliate" button or contact us via email and we will help you get started with one of the best VPN affiliate programs out there.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsked;
