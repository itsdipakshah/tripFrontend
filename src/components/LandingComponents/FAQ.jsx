import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="px-20 py-16 w-1/2  mx-auto">
      {/* heading */}
      <div>
        <h2 className="text-5xl font-bold text-center mb-10">
          FAQ{" "}
        </h2>
      </div>

      <div>
        <Accordion type="single" collapsible defaultValue="item-1" >
          <AccordionItem value="item-1">
            <AccordionTrigger>Is this website is helpful for you?</AccordionTrigger>
            <AccordionContent>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero doloribus commodi tempore officiis quasi, praesentium dicta repellat eligendi impedit natus qui aperiam aliquid similique ipsam odit repellendus iure consequuntur.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>How was your trip?</AccordionTrigger>
            <AccordionContent>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero doloribus commodi tempore officiis quasi, praesentium dicta repellat eligendi impedit natus qui aperiam aliquid similique ipsam odit repellendus iure consequuntur.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How are you?</AccordionTrigger>
            <AccordionContent>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero doloribus commodi tempore officiis quasi, praesentium dicta repellat eligendi impedit natus qui aperiam aliquid similique ipsam odit repellendus iure consequuntur.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How was your Experiance?</AccordionTrigger>
            <AccordionContent>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero doloribus commodi tempore officiis quasi, praesentium dicta repellat eligendi impedit natus qui aperiam aliquid similique ipsam odit repellendus iure consequuntur.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How much you rate our services ?</AccordionTrigger>
            <AccordionContent>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vero doloribus commodi tempore officiis quasi, praesentium dicta repellat eligendi impedit natus qui aperiam aliquid similique ipsam odit repellendus iure consequuntur.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
