import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  const seoData = seo || { title: "Portfolio", description: "", og: {} };
  let sameAs = [];
  socialMediaLinks
    .filter(
      (media) =>
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .forEach((media) => {
      sameAs.push(media.link);
    });

  let mailMedia = socialMediaLinks.find((media) =>
    media.link.startsWith("mailto")
  );
  let mail = mailMedia ? mailMedia.link.substring("mailto:".length) : undefined;
  let job = experience.sections
    ?.find((section) => section.work)
    ?.experiences?.at(0);

  let credentials = [];
  certifications.certifications.forEach((certification) => {
    credentials.push({
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      url: certification.certificate_link,
      name: certification.title,
      description: certification.subtitle,
    });
  });
  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting.title,
    url: seoData?.og?.url,
    email: mail,
    telephone: contactPageData.phoneSection?.subtitle,
    sameAs: sameAs,
    jobTitle: job?.title,
    worksFor: job
      ? {
          "@type": "Organization",
          name: job.company,
        }
      : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData.addressSection?.locality,
      addressRegion: contactPageData.addressSection?.region,
      addressCountry: contactPageData.addressSection?.country,
      postalCode: contactPageData.addressSection?.postalCode,
      streetAddress: contactPageData.addressSection?.streetAddress,
    },
    hasCredential: credentials,
  };
  return (
    <Helmet>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta property="og:title" content={seoData?.og?.title} />
      <meta property="og:type" content={seoData?.og?.type} />
      <meta property="og:url" content={seoData?.og?.url} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
