import Gallery from "./Gallery";


export const metadata = {
    title: "Our Portfolio | Hair, Skin & Makeup Results | NK Beauty Salon",
    description:
        "Browse our gallery of stunning bridal makeovers, professional hair styling, and skin treatments. See the results of our expert services in Burari, Delhi.",
    keywords: [
        "salon portfolio Delhi",
        "hair styling photos",
        "bridal makeup gallery",
        "beauty salon results",
        "NK Beauty transformations",
        "hair color gallery",
    ],
    openGraph: {
        title: "Beauty Transformations at NK Beauty Salon & Academy",
        description:
            "Explore real results of bridal makeup, hair styling, and skin treatments.",
        images: [
            {
                url: "https://nk-parlour.vercel.app/gallery-preview.jpg",
            },
        ],
    },
};

export default function Page() {
    return <Gallery />;
}