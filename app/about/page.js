import About from "./About";

export const metadata = {
  title: "About Us | NK Beauty Salon Burari",
  description:
    "Learn more about NK Beauty Salon, your trusted partner for stunning bridal makeovers, professional hair styling, and skin treatments in Burari, Delhi.",
  keywords: [
    "about NK Beauty Salon",
    "salon information Burari",
    "bridal makeup artist",
    "hair stylist Delhi",
    "skin care treatments",
  ],
  openGraph: {
    title: "About NK Beauty Salon",
    description:
      "Discover the story behind NK Beauty Salon and our commitment to providing exceptional beauty services in Burari, Delhi.",
    images: [
      {
        url: "https://nk-parlour.vercel.app/about-preview.jpg",
      },
    ],
  },
};

export default function Page() {
  return <About />;
}
  

