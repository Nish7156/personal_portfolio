import Image, { ImageProps } from "next/image";

type NextImageProps = {
  useSkeleton?: boolean;
  classNames?: {
    image?: string;
    blur?: string;
  };
  isCenter?:boolean;
  alt: string;
} & (
  | { width: string | number; height: string | number }
  | { layout: "fill"; width?: string | number; height?: string | number }
) &
  ImageProps;

/**
 *
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
export default function NextImage({
  useSkeleton = false,
  src,
  width,
  height,
  alt,
  className,
  classNames,
  isCenter,
  ...rest
}: NextImageProps) {
  return (
    <figure className={className ?className : isCenter ? "flex justify-center items-center" : ''} >
      <Image
        className={className}
        src={src}
        width={width}
        height={height}
        alt={alt}
        {...rest}
      />
    </figure>
  );
}
