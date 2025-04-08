import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  isAuthor,
}: Props) => {
  const metricContect = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`h-6 w-6 rounded-full ${textStyles}`}
      />

      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
        >
          {title}
        </span>
      </p>
    </>
  );

  return href ? (
    <Link href={href} className="flex-center gap-1">
      {metricContect}
    </Link>
  ) : (
    <div className="flex-center gap-1">{metricContect}</div>
  );
};

export default Metric;
