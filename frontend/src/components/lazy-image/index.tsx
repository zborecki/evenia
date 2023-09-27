'use client';

import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

import { SERVICE_KEY } from '#/services/service-keys';
import { nextAPI } from '#libraries/axios';
import { PlaiceholderResponse } from '#props/api';
import { LazyImageProps } from '#props/components';

const LazyImage: FC<LazyImageProps> = ({
  alt, height, src, width
}) => {
  const [image, setImage] = useState<PlaiceholderResponse | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await nextAPI.post<PlaiceholderResponse>(SERVICE_KEY.PLAICEHOLDER, {
        imageURL: src
      });

      setImage(data);
    };

    // eslint-disable-next-line no-console
    fetch().catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="w-[200px] h-[200px]"
        style={image?.plaiceholder.css}
      />
      <Image
        alt={alt}
        height={height}
        loading="lazy"
        src={src}
        width={width}
      />
    </>
  );
};

export { LazyImage };
