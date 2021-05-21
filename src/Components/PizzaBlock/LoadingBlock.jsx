import React from "react";
import ContentLoader from "react-content-loader";

export default function LoadingBlock() {
    return (
        <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <rect x="0" y="259" rx="3" ry="3" width="276" height="24" />
            <rect x="1" y="297" rx="6" ry="6" width="276" height="80" />
            <rect x="3" y="397" rx="4" ry="4" width="94" height="33" />
            <circle cx="138" cy="121" r="118" />
            <rect x="123" y="386" rx="32" ry="32" width="152" height="54" />
        </ContentLoader>
    )
}