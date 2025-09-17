import Image from "next/image";
import React from "react";
import { BLOCKS, INLINES, MARKS, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button } from "@/components/ui/button";

interface BlogPostClientProps {
  items: any;
  title: string;
}

const richTextOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const { title, description, file } = node?.data?.target?.fields || {};
      const { url, contentType } = file || {};
      const mimeGroup = contentType?.split("/")[0];

      switch (mimeGroup) {
        case "image":
          return (
            <div className="w-full md:w-[50%] my-4 mx-auto relative aspect-square">
              <Image
                title={title || ""}
                alt={description || title || "Embedded image"}
                src={"https:" + url}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          );
        default:
          return (
            <span className="bg-red-500 text-white px-2 py-1 rounded">
              {contentType} embedded asset
            </span>
          );
      }
    },

    // Headings
    [BLOCKS.HEADING_2]: (node: any, children: any) => (
      <h2 className="mt-6 mb-2 text-2xl md:text-3xl font-semibold">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node: any, children: any) => (
      <h3 className="mt-4 mb-2 text-lg md:text-xl font-semibold">{children}</h3>
    ),

    // Paragraphs
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="mt-2 mb-4 text-base leading-relaxed whitespace-pre-line">
        {children}
      </p>
    ),

    // Lists
    [BLOCKS.UL_LIST]: (node: any, children: any) => (
      <ul className="list-disc list-outside pl-6 my-4 space-y-2">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (node: any, children: any) => (
      <ol className="list-decimal list-outside pl-6 my-4 space-y-2">
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => (
      <li className="leading-relaxed">{children}</li>
    ),
    // Inline links
    [INLINES.HYPERLINK]: (node: any, children: any) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-voks-secondary hover:underline font-semibold"
      >
        {children}
      </a>
    ),
  },
};

const JobContent: React.FC<BlogPostClientProps> = ({ items, title }) => {
  const content: Document = items[0]?.fields?.description;
  const recruitmentUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScZbeb5WaywS27oMHj6n6vLBBUapSitZup1vUocw3M4kuD24g/viewform?usp=header";
  return (
    <div className="md:w-[90%] w-full mt-8  mx-auto">
      <div className="mb-6 flex flex-col items-start justify-start gap-y-4 ">
        <h1 className="text-2xl md:text-4xl font-bold text-left">{title}</h1>
        <Button
          asChild
          size={"lg"}
          className="mt-2 text-white !rounded bg-[#05418f] hover:bg-[#04306e]"
        >
          <a target="_blank" href={recruitmentUrl}>
            Apply
          </a>
        </Button>
      </div>
      <div className="h-full w-full pb-8 prose prose-lg max-w-none">
        {documentToReactComponents(content, richTextOptions)}
      </div>
      <div className="my-6 flex flex-col items-start justify-start gap-y-4 ">
        <Button
          asChild
          size={"lg"}
          className="mt-2 text-white !rounded bg-[#05418f] hover:bg-[#04306e]"
        >
          <a target="_blank" href={recruitmentUrl}>
            Apply
          </a>
        </Button>
      </div>
    </div>
  );
};

export default JobContent;
