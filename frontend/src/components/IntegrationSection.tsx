import Image from "next/image";

const images = [
  {
    src: "/images/salesforce.png",
    alt: "Salesforce",
  },
  {
    src: "/images/hubspot.png",
    alt: "Hubspot",
  },
  {
    src: "/images/slack.png",
    alt: "Slack",
  },
  {
    src: "/images/google.png",
    alt: "Google",
  },
  {
    src: "/images/teams.png",
    alt: "MS Teams",
  },
  {
    src: "/images/dropbox.png",
    alt: "Dropbox",
  },
  {
    src: "/images/onedrive.png",
    alt: "OneDrive",
  },
  {
    src: "/images/box.png",
    alt: "Box",
  },
  {
    src: "/images/word.png",
    alt: "MS Word",
  },
  {
    src: "/images/docs.png",
    alt: "Google Docs",
  },
  {
    src: "/images/aws.png",
    alt: "AWS",
  },
  {
    src: "/images/acrobat.png",
    alt: "Adobe Acrobat",
  },
  {
    src: "/images/oracle.png",
    alt: "Oracle",
  },
  {
    src: "/images/paypal.png",
    alt: "PayPal",
  },
  {
    src: "/images/jira.png",
    alt: "Jira",
  },
];

export default function IntegrationSection() {
  return (
    <div className='px-16 py-12 flex bg-slate-200'>
      <div className='basis-1/2 flex justify-center items-center'>
        <div>
          <div className='text-lg text-blue-700'>Integrations</div>
          <h2 className='font-bold'>
            Smooth integration with your favourite business tools.
          </h2>
        </div>
      </div>
      <div className='basis-1/10'></div>
      <div className='grid grid-cols-5 gap-16'>
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            width={48}
            height={48}
            title={img.alt}
          />
        ))}
      </div>
    </div>
  );
}
