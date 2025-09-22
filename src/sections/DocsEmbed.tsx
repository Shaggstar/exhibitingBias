import React from "react";

type Props = {
  title: string;
  url: string; // public pdf url (Dropbox "dl=1" works best)
  height?: number;
};

export default function DocsEmbed({ title, url, height = 720 }: Props) {
  // Dropbox: convert ?dl=0|?dl=1 appropriately
  const safeUrl = url.replace("?dl=0", "?raw=1").replace("?dl=1", "?raw=1");
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="rounded-xl overflow-hidden border border-orange-300/25 bg-black/20">
        <iframe
          src={safeUrl}
          title={title}
          width="100%"
          height={height}
          style={{ border: "0" }}
        />
      </div>
      <p className="mt-2 text-sm text-neutral-400">
        If the embed does not load,{" "}
        <a className="underline text-orange-300" href={url} target="_blank" rel="noreferrer">
          open the PDF in a new tab
        </a>.
      </p>
    </section>
  );
}
